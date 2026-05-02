import { useMemo, useReducer } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Neighborhood } from '../../types/neighborhood';
import type { World } from '../../types/world';
import { Icon } from '../Icon';
import { filtersReducer } from '../../hooks/reducers/filterReducer';
import type { LotFilters } from '../../types/lot';
import { QUERY_PARAM_MAP_KEYS, QUERY_PARAM_MAP } from '../../utils/constants';

const LOT_FILTER_OPTIONS = {
  buildingTypes: [
    { label: 'House', value: 'house' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Empty lot', value: 'empty' },
  ],
  transactionTypes: [
    { label: 'Buy', value: 'buy' },
    { label: 'Rent', value: 'rent' },
  ],
  floors: [1, 2, 3],
  bedrooms: [1, 2, 3, 4, 5],
  bathrooms: [1, 2, 3, 4],
  sortBy: ['price'],
  sort: [
    { label: 'Lower to higher', value: 'asc' },
    { label: 'Higher to lower', value: 'desc' },
  ],
};

export const SearchForm = () => {
  const navigate = useNavigate();
  const { worlds, neighborhoods, filters } = useLoaderData();

  const initialFilter = QUERY_PARAM_MAP_KEYS.reduce((acc, key) => {
    acc[key] = filters?.[key] || '';
    return acc;
  }, {} as LotFilters);

  const [filter, dispatch] = useReducer(filtersReducer, initialFilter);

  const defaultSelection = 'All';

  const filteredNeighborhood = useMemo(() => {
    if (!filter.world) return neighborhoods;
    return neighborhoods.filter((item: Neighborhood) => item.world.id === filter.world);
  }, [filter.world, neighborhoods]);

  const handleWorldChange = (worldId: string) => {
    dispatch({ type: 'SET_WORLD', payload: worldId });
  };

  const handleFilterChange = (data: Partial<LotFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: data });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
    navigate('/');
  };

  const handleSubmit = (event?: any) => {
    event.preventDefault();
    const params = new URLSearchParams();

    // set query params in browser on filter submit
    Object.entries(filter).forEach(([key, value]) => {
      if (!value) return {};
      const queryKey = QUERY_PARAM_MAP?.[key as keyof LotFilters];
      if (queryKey) return params.set(queryKey, value);
    });

    const queryString = params.toString();
    navigate(queryString ? `/?${queryString}` : '/');
  };

  return (
    <form className="sims-font rlt-search container" onSubmit={handleSubmit}>
      <div className="row row-gap-3">
        <div className="col-md-4">
          <label htmlFor="field-world">World</label>

          <select
            className="form-select"
            id="field-world"
            value={filter.world || ''}
            onChange={(event) => handleWorldChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>

            {(worlds || [])?.map((item: World) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-neigh">Neighborhood</label>

          <select
            className="form-select"
            id="Neighborhood"
            value={filter.neighborhood || ''}
            onChange={(event) => handleFilterChange({ neighborhood: event.target.value })}
          >
            <option value="">{defaultSelection}</option>

            {(filteredNeighborhood || [])?.map((item: Neighborhood) => (
              <option key={item.id} value={item.id}>
                {item.title} ({item.world?.id})
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-building-type">Building type</label>

          <select
            className="form-select"
            id="field-building-type"
            value={filter.buildingType || ''}
            onChange={(event) => handleFilterChange({ buildingType: event.target.value })}
          >
            <option value="">{defaultSelection}</option>
            {LOT_FILTER_OPTIONS?.buildingTypes?.map((item: { label: string; value: string }) => (
              <option key={`building-type-${item.value}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-transaction-type">Transaction type</label>

          <select
            className="form-select"
            id="field-transaction-type"
            value={filter.transactionType || ''}
            onChange={(event) => handleFilterChange({ transactionType: event.target.value })}
          >
            <option value="">{defaultSelection}</option>
            {LOT_FILTER_OPTIONS?.transactionTypes?.map((item) => (
              <option key={`transaction-type-${item.value}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-bedrooms">Bedrooms</label>

          <select
            className="form-select"
            id="field-bedrooms"
            value={filter.bedrooms || ''}
            onChange={(event) => handleFilterChange({ bedrooms: event.target.value })}
          >
            <option value="">{defaultSelection}</option>

            {LOT_FILTER_OPTIONS?.bedrooms?.map((item: number) => (
              <option key={`bedrooms-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-bathrooms">Bathrooms</label>

          <select
            className="form-select"
            id="field-bathrooms"
            value={filter.bathrooms || ''}
            onChange={(event) => handleFilterChange({ bathrooms: event.target.value })}
          >
            <option value="">{defaultSelection}</option>

            {LOT_FILTER_OPTIONS?.bathrooms?.map((item: number) => (
              <option key={`bathrooms-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="field-floors">Floors</label>

          <select
            className="form-select"
            id="field-floors"
            value={filter.floors || ''}
            onChange={(event) => handleFilterChange({ floors: event.target.value })}
          >
            <option value="">{defaultSelection}</option>

            {LOT_FILTER_OPTIONS?.floors?.map((item: number) => (
              <option key={`floors-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button className="rlt-btn --lg --search" type="submit">
          <Icon name="search" ariaLabel="Search lots" />
        </button>

        <button className="rlt-btn --sm --search" type="button" onClick={handleClear}>
          <Icon name="close" ariaLabel="Clear filters" />
        </button>
      </div>
    </form>
  );
};
