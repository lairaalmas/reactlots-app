import { useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Neighborhood } from '../../types/neighborhood';
import type { World } from '../../types/world';

export const SearchForm = () => {
  const { worlds, neighborhoods, filters } = useLoaderData();
  const navigate = useNavigate();

  const [selectedWorldId, setSelectedWorldId] = useState(filters?.worldId ?? '');
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState(filters?.neighborhoodId ?? '');
  const [selectedFloor, setSelectedFloor] = useState(filters?.buildingDetail?.floors ?? '');
  const [selectedBathroom, setSelectedBathroom] = useState(filters?.buildingDetail?.bathrooms ?? '');
  const [selectedBedroom, setSelectedBedroom] = useState(filters?.buildingDetail?.bedrooms ?? '');
  const [selectedBuildingStatus, setSelectedBuildingStatus] = useState(filters?.buildingDetail?.status ?? '');
  const [selectedSortBy, setSelectedSortBy] = useState(filters?.sortBy ?? '');
  const [selectedSort, setSelectedSort] = useState(filters?.sort ?? '');

  const defaultSelection = 'All';

  const filteredNeighborhood = useMemo(() => {
    if (!selectedWorldId) return neighborhoods;
    return neighborhoods.filter((item: Neighborhood) => item.world.id === selectedWorldId);
  }, [selectedWorldId, neighborhoods]);

  const handleWorldChange = (id: string) => {
    setSelectedWorldId(id);
    setSelectedNeighborhoodId('');
  };
  const handleNeighborgoodChange = (id: string) => {
    setSelectedNeighborhoodId(id);
  };
  const handleFloorChange = (value: string) => {
    setSelectedFloor(value);
  };
  const handleBedroomChange = (value: string) => {
    setSelectedBedroom(value);
  };
  const handleBathroomChange = (value: string) => {
    setSelectedBathroom(value);
  };
  const handleBuildingStatusChange = (value: string) => {
    setSelectedBuildingStatus(value);
  };
  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };
  const handleSortByChange = (value: string) => {
    setSelectedSortBy(value);
  };
  const handleClear = () => {
    setSelectedWorldId('');
    setSelectedNeighborhoodId('');
    setSelectedFloor('');
    setSelectedBedroom('');
    setSelectedBathroom('');
    setSelectedBuildingStatus('');
    setSelectedSortBy('price');
    setSelectedSort('asc');
    navigate('/');
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const params = new URLSearchParams();

    // set query params in browser on filter submit
    if (selectedWorldId) params.set('world', selectedWorldId);
    if (selectedNeighborhoodId) params.set('neighborhood', selectedNeighborhoodId);
    if (selectedBuildingStatus) params.set('building_status', selectedBuildingStatus);
    if (selectedBedroom) params.set('bedrooms', selectedBedroom);
    if (selectedBathroom) params.set('bathrooms', selectedBathroom);
    if (selectedFloor) params.set('floors', selectedFloor);
    if (selectedSortBy) params.set('sort_by', selectedSortBy);
    if (selectedSort) params.set('sort', selectedSort);

    const queryString = params.toString();
    navigate(queryString ? `/?${queryString}` : '/');
  };

  return (
    <form className="sims-font rlt-search container" onSubmit={handleSubmit}>
      <div className="row row-gap-3">
        {/* Buy x rent - todo? */}
        {/* Residential x community x special */}

        {/* built x empty */}
        <div className="col-md-4">
          <label htmlFor="field-building-status">Building type</label>

          <select
            className="form-select"
            id="field-building-status"
            value={selectedBuildingStatus || ''}
            onChange={(event) => handleBuildingStatusChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>
            {[
              { label: 'House', value: 'built' },
              { label: 'Empty lot', value: 'empty' },
            ]?.map((item: any) => (
              <option key={`building-status-${item.value}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* world */}
        <div className="col-md-4">
          <label htmlFor="field-world">World</label>

          <select
            className="form-select"
            id="field-world"
            value={selectedWorldId || ''}
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

        {/* neighborhood */}
        <div className="col-md-4">
          <label htmlFor="field-neigh">Neighborhood</label>

          <select
            className="form-select"
            id="Neighborhood"
            value={selectedNeighborhoodId || ''}
            onChange={(event) => handleNeighborgoodChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>

            {(filteredNeighborhood || [])?.map((item: Neighborhood) => (
              <option key={item.id} value={item.id}>
                {item.title} ({item.world.id})
              </option>
            ))}
          </select>
        </div>

        {/* bedroom */}
        <div className="col-md-4">
          <label htmlFor="field-bedroom">Bedroom</label>

          <select
            className="form-select"
            id="field-bedroom"
            value={selectedBedroom || ''}
            onChange={(event) => handleBedroomChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>

            {[1, 2, 3, 4, 5]?.map((item: any) => (
              <option key={`bedroom-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* bathroom */}
        <div className="col-md-4">
          <label htmlFor="field-bathroom">Bathroom</label>

          <select
            className="form-select"
            id="field-bathroom"
            value={selectedBathroom || ''}
            onChange={(event) => handleBathroomChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>

            {[1, 2, 3, 4]?.map((item: any) => (
              <option key={`bathroom-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* floors */}
        <div className="col-md-4">
          <label htmlFor="field-floors">Floors</label>

          <select
            className="form-select"
            id="field-floors"
            value={selectedFloor || ''}
            onChange={(event) => handleFloorChange(event.target.value)}
          >
            <option value="">{defaultSelection}</option>

            {[1, 2, 3]?.map((item: any) => (
              <option key={`floors-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <hr className="text-light mt-3" />

        {/* sort by */}
        <div className="col-md-4">
          <label htmlFor="field-sort-by">Sort by</label>

          <select
            className="form-select"
            id="field-sort-by"
            value={selectedSortBy || ''}
            onChange={(event) => handleSortByChange(event.target.value)}
          >
            {['price', 'bedrooms', 'bathrooms', 'floors']?.map((item: any) => (
              <option key={`sort-by-${item}`} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* sort */}
        <div className="col-md-4">
          <label htmlFor="field-sort">Sort type</label>

          <select
            className="form-select"
            id="field-sort"
            value={selectedSort || ''}
            onChange={(event) => handleSortChange(event.target.value)}
          >
            {[
              { label: 'low to high', value: 'asc' },
              { label: 'high to low', value: 'desc' },
            ]?.map((item: any) => (
              <option key={`sort-type-${item.value}`} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button className="rlt-search__btn rlt-search__btn--primary" type="submit">
          <span className="material-symbols-rounded" title="Search lots" aria-label="Search lots">
            search
          </span>
        </button>

        <button className="rlt-search__btn rlt-search__btn--secondary" type="button" onClick={handleClear}>
          <span className="material-symbols-rounded" title="Clear filters" aria-label="Clear filters">
            close
          </span>
        </button>
      </div>
    </form>
  );
};
