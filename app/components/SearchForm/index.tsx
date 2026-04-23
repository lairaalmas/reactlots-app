import { useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Neighborhood } from '../../types/neighborhood';
import type { World } from '../../types/world';

export const SearchForm = () => {
  const { worlds, neighborhoods, filters } = useLoaderData();
  const navigate = useNavigate();

  const [selectedWorldId, setSelectedWorldId] = useState(filters?.worldId ?? '');
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState(filters?.neighborhoodId ?? '');

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
  const handleClear = () => {
    setSelectedWorldId('');
    setSelectedNeighborhoodId('');
    navigate('/');
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (selectedWorldId) params.set('world', selectedWorldId);
    if (selectedNeighborhoodId) params.set('neighborhood', selectedNeighborhoodId);

    const queryString = params.toString();
    navigate(queryString ? `/?${queryString}` : '/');
  };

  return (
    <form className="sims-font rlt-search container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4">
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

        <div className="col-4">
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
