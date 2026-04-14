import { useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import type { Neighborhood } from "../../types/neighborhood";
import type { World } from "../../types/world";

export const SearchForm = () => {
  const { worlds, neighborhoods, filters } = useLoaderData();
  const navigate = useNavigate();

  const [selectedWorldId, setSelectedWorldId] = useState(filters?.worldId ?? '');
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState(filters?.neighborhoodId ?? '');

  const defaultSelection = 'All';

  const filteredNeighborhood = useMemo(() => {
    if (!selectedWorldId) return neighborhoods;
    return neighborhoods.filter((item: Neighborhood) => item.world.id === selectedWorldId)
  }, [selectedWorldId, neighborhoods])

  const handleWorldChange = (id: string) => {
    setSelectedWorldId(id);
    setSelectedNeighborhoodId(''); 
  }
  const handleNeighborgoodChange = (id: string) => {
    setSelectedNeighborhoodId(id);
  }
  // const handleClear = () => {
  //   setSelectedWorldId('');
  //   setSelectedNeighborhoodId('');
  //   navigate('/');
  // }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (selectedWorldId) params.set('world', selectedWorldId);
    if (selectedNeighborhoodId) params.set('neighborhood', selectedNeighborhoodId);

    const queryString = params.toString();
    navigate(queryString ? `/?${queryString}` : '/');
  }

  return <form className="sims-font" onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-4">
        <label htmlFor="field-world">World</label>
        
        <select className="form-select" id="field-world" value={selectedWorldId || ''} onChange={(event) => handleWorldChange(event.target.value)}>
          <option value="">{defaultSelection}</option>

          {(worlds || [])?.map((item: World) => (
            <option key={item.id} value={item.id}>{item.title}</option>
          ))}
        </select>
      </div>

      <div className="col-4">
        <label htmlFor="field-neigh">Neighborhood</label>

        <select className="form-select" id="Neighborhood" value={selectedNeighborhoodId || ''} onChange={(event) => handleNeighborgoodChange(event.target.value)}>
          <option value="">{defaultSelection}</option>

          {(filteredNeighborhood || [])?.map((item: Neighborhood) => (
            <option key={item.id} value={item.id}>{item.title} ({item.world.id})</option>
          ))}
        </select>
      </div>
    </div>

    <div className="d-flex justify-content-center mt-3">
      <button type="submit" className="btn bg-info me-2">Search</button>
      {/* <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClear}
      >
        Clear
      </button> */}
    </div>
  </form>
};