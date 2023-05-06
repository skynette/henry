import  { useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceDetail = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'This is service 1',
      location: 'Location 1',
      type: 'Type 1',
      price: '$10',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'This is service 2',
      location: 'Location 2',
      type: 'Type 2',
      price: '$20',
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'This is service 3',
      location: 'Location 3',
      type: 'Type 3',
      price: '$30',
    },
    {
      id: 4,
      title: 'Service 4',
      description: 'This is service 4',
      location: 'Location 4',
      type: 'Type 4',
      price: '$40',
    },
    {
      id: 5,
      title: 'Service 5',
      description: 'This is service 5',
      location: 'Location 5',
      type: 'Type 5',
      price: '$50',
    },
    {
      id: 6,
      title: 'Service 6',
      description: 'This is service 6',
      location: 'Location 6',
      type: 'Type 6',
      price: '$60',
    },
  ];

  const filteredServices = services.filter((service) => {
    return (
      service.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      service.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
      service.title.toLowerCase().includes(nameFilter.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-4">
        <div className="w-1/3">
          <label htmlFor="locationFilter" className="block font-bold mb-2">Location:</label>
          <select id="locationFilter" name="locationFilter" value={locationFilter} onChange={handleLocationFilterChange} className="w-full border border-gray-400 p-2 rounded">
            <option value="">All Locations</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
            <option value="Location 4">Location 4</option>
            <option value="Location 5">Location 5</option>
            <option value="Location 6">Location 6</option>
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="typeFilter" className="block font-bold mb-2">Type:</label>
          <select id="typeFilter" name="typeFilter" value={typeFilter} onChange={handleTypeFilterChange} className="w-full border border-gray-400 p-2 rounded">
            <option value="">All Types</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
            <option value="Type 4">Type 4</option>
            <option value="Type 5">Type 5</option>
            <option value="Type 6">Type 6</option>
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="nameFilter" className="block font-bold mb-2">Name:</label>
          <input type="text" id="nameFilter" name="nameFilter" value={nameFilter} onChange={handleNameFilterChange} className="w-full border border-gray-400 p-2 rounded" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} title={service.title} description={service.description} location={service.location} type={service.type} price={service.price} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
