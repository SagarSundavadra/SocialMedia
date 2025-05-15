// // Utility functions for working with localStorage

// // Get data from localStorage with parsing
// export const getLocalStorageItem = (key, defaultValue = null) => {
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : defaultValue;
//     } catch (error) {
//       console.error(`Error getting ${key} from localStorage:`, error);
//       return defaultValue;
//     }
//   };
  
//   // Save data to localStorage with stringification
//   export const setLocalStorageItem = (key, value) => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//       return true;
//     } catch (error) {
//       console.error(`Error setting ${key} in localStorage:`, error);
//       return false;
//     }
//   };
  
//   // Remove item from localStorage
//   export const removeLocalStorageItem = (key) => {
//     try {
//       localStorage.removeItem(key);
//       return true;
//     } catch (error) {
//       console.error(`Error removing ${key} from localStorage:`, error);
//       return false;
//     }
//   };
  
//   // Clear all items from localStorage
//   export const clearLocalStorage = () => {
//     try {
//       localStorage.clear();
//       return true;
//     } catch (error) {
//       console.error('Error clearing localStorage:', error);
//       return false;
//     }
//   };