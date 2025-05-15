// // userStorage.js - A utility for managing user authentication data

// // Store user data securely
// export const saveUser = (userData) => {
//     try {
//       // Hash the password before storing
//       const hashedPassword = btoa(userData.password);
      
//       // Create user object
//       const userToStore = {
//         ...userData,
//         password: hashedPassword,
//         id: userData.id || Date.now().toString()
//       };
      
//       // Remove the password confirmation field if it exists
//       if (userToStore.confirmPassword) {
//         delete userToStore.confirmPassword;
//       }
      
//       // Store the user data
//       localStorage.setItem('user', JSON.stringify(userToStore));
//       return true;
//     } catch (error) {
//       console.error('Error saving user data:', error);
//       return false;
//     }
//   };
  
//   // Retrieve user data
//   export const getUser = () => {
//     try {
//       const userData = localStorage.getItem('user');
//       return userData ? JSON.parse(userData) : null;
//     } catch (error) {
//       console.error('Error retrieving user data:', error);
//       return null;
//     }
//   };
  
//   // Verify user credentials
//   export const verifyCredentials = (email, password) => {
//     try {
//       const userData = getUser();
//       if (!userData) return false;
      
//       // Check if email and hashed password match
//       const passwordMatches = userData.password === btoa(password);
//       const emailMatches = userData.email === email;
      
//       console.log('Verification debug:', {
//         emailMatches,
//         passwordMatches
//       });
      
//       return emailMatches && passwordMatches;
//     } catch (error) {
//       console.error('Error verifying credentials:', error);
//       return false;
//     }
//   };
  
//   // Set authentication state
//   export const setAuthState = (isAuth) => {
//     localStorage.setItem('isAuthenticated', isAuth ? 'true' : 'false');
//   };
  
//   // Get authentication state
//   export const getAuthState = () => {
//     return localStorage.getItem('isAuthenticated') === 'true';
//   };
  
//   // Clear authentication state (logout)
//   export const clearAuthState = () => {
//     localStorage.removeItem('isAuthenticated');
//   };
  
//   // Clear all user data (complete logout)
//   export const clearUserData = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('isAuthenticated');
//   };