import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { airplaneCategories } from '../helpers/airplaneCategories';

const AirplanesContext = createContext();

export const useAirplanes = () => {
  return useContext(AirplanesContext);
};

export const AirplanesProvider = ({ children }) => {
  const [airplanes, setAirplanes] = useState([]);

  const loadAirplanes = async () => {
    try {
      const savedAirplanes = await AsyncStorage.getItem('airplanes');
      if (!savedAirplanes) {
        console.log('No airplanes found in AsyncStorage, using default categories');
        setAirplanes(airplaneCategories);
      } else {
        const parsedAirplanes = JSON.parse(savedAirplanes);
        console.log('Loaded airplanes from AsyncStorage:', parsedAirplanes);
        setAirplanes(parsedAirplanes);
      }
    } catch (error) {
      console.error('Error loading airplanes:', error);
      setAirplanes(airplaneCategories);
    }
  };

  useEffect(() => {
    loadAirplanes();
  }, []);

  useEffect(() => {
    if (airplanes.length > 0) {
      console.log('Saving updated airplanes to AsyncStorage:', airplanes); 
      AsyncStorage.setItem('airplanes', JSON.stringify(airplanes)).catch((error) => {
        console.error('Error saving airplanes:', error);
      });
    }
  }, [airplanes]);

  const addPlane = (categoryTitle, newPlane) => {
    setAirplanes((prevAirplanes) => {
      const updatedAirplanes = prevAirplanes.map((categoryObj) => {
        if (categoryObj.title === categoryTitle) {
          return {
            ...categoryObj,
            airplanes: [...categoryObj.airplanes, newPlane],
          };
        }
        return categoryObj;
      });
      return updatedAirplanes;
    });
  };

  const removePlane = (categoryTitle, planeId) => {
    setAirplanes((prevAirplanes) => {
      const updatedAirplanes = prevAirplanes.map((categoryObj) => {
        console.log(categoryObj.title)
        if (categoryObj.title === categoryTitle) {
          const filteredAirplanes = categoryObj.airplanes.filter((plane) => plane.id !== planeId);
          console.log('Filtered airplanes:', filteredAirplanes); 
          return {
            ...categoryObj,
            airplanes: filteredAirplanes, 
          };
        }
        return categoryObj;
      });
      return updatedAirplanes;
    });
  };

  const editPlane = (categoryTitle, updatedPlane) => {
    setAirplanes((prevAirplanes) => {
      const updatedAirplanes = prevAirplanes.map((categoryObj) => {
        if (categoryObj.title === categoryTitle) {
          const updatedAirplanesList = categoryObj.airplanes.map((plane) => {
            if (plane.id === updatedPlane.id) {
              return { ...plane, ...updatedPlane }; 
            }
            return plane;
          });
          return {
            ...categoryObj,
            airplanes: updatedAirplanesList,
          };
        }
        return categoryObj;
      });
      return updatedAirplanes;
    });
  };
  
  
  

  return (
    <AirplanesContext.Provider value={{ airplanes, addPlane, removePlane, editPlane }}>
      {children}
    </AirplanesContext.Provider>
  );
};
