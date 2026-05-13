// src/api/citizenApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091'; // Adjust port to match your backend

export const citizenApi = {
  // Fetch all programs for the citizen table
  getAllPrograms: () => axios.get(`${API_BASE_URL}/programs/fetchAll`),

  // Citizen submits application
  submitApplication: (applicationData) => 
    axios.post(`${API_BASE_URL}/applications/save`, applicationData),

  // Optional: Fetch previous applications for context
//   getApplicationsByEntity: (entityId) => 
//     axios.get(`${API_BASE_URL}/applications/fetchByEntity/${entityId}`)
};