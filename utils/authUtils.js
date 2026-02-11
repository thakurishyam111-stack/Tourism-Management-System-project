// Authentication utilities for the tourism app

export const authUtils = {
  // Check if user is logged in
  isLoggedIn: () => {
    if (typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('currentUser');
      return currentUser ? JSON.parse(currentUser) : null;
    }
    return null;
  },

  // Get current user
  getCurrentUser: () => {
    if (typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('currentUser');
      return currentUser ? JSON.parse(currentUser) : null;
    }
    return null;
  },

  // Login user
  loginUser: (email, password) => {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('tourismUsers') || '[]');
      const user = users.find(u => u.email === email);
      
      if (user && user.password === password) {
        const loginSession = {
          userId: user.id,
          email: user.email,
          name: user.name,
          phone: user.phone,
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(loginSession));
        return loginSession;
      }
    }
    return null;
  },

  // Register user
  registerUser: (userData) => {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('tourismUsers') || '[]');
      
      // Check if email already exists
      if (users.some(u => u.email === userData.email)) {
        return { error: 'Email already registered' };
      }

      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email.toLowerCase(),
        phone: userData.phone,
        password: userData.password, // In production, hash this
        createdAt: new Date().toISOString(),
        verified: false
      };

      users.push(newUser);
      localStorage.setItem('tourismUsers', JSON.stringify(users));
      
      return { success: true, user: newUser };
    }
    return { error: 'Window object not available' };
  },

  // Logout user
  logoutUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
  },

  // Update user profile
  updateUserProfile: (userId, updates) => {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('tourismUsers') || '[]');
      const userIndex = users.findIndex(u => u.id === userId);
      
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
        localStorage.setItem('tourismUsers', JSON.stringify(users));
        
        // Update current session if it's the logged-in user
        const currentUser = this.getCurrentUser();
        if (currentUser && currentUser.userId === userId) {
          const updatedSession = { ...currentUser, ...updates };
          localStorage.setItem('currentUser', JSON.stringify(updatedSession));
        }
        
        return users[userIndex];
      }
    }
    return null;
  },

  // Change password
  changePassword: (email, oldPassword, newPassword) => {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('tourismUsers') || '[]');
      const user = users.find(u => u.email === email);
      
      if (user && user.password === oldPassword) {
        user.password = newPassword;
        localStorage.setItem('tourismUsers', JSON.stringify(users));
        return { success: true };
      }
    }
    return { error: 'Invalid old password' };
  },

  // Initialize demo users (for testing)
  initializeDemoUsers: () => {
    if (typeof window !== 'undefined') {
      const existingUsers = JSON.parse(localStorage.getItem('tourismUsers') || '[]');
      if (existingUsers.length === 0) {
        const demoUsers = [
          {
            id: '1',
            name: 'Shyam Singh',
            email: 'shyam@tourismnepal.com',
            phone: '9841234567',
            password: 'Password123!', // Password@123
            createdAt: new Date().toISOString(),
            verified: true
          },
          {
            id: '2',
            name: 'Admin User',
            email: 'admin@tourismnepal.com',
            phone: '9842345678',
            password: 'Admin@12345',
            createdAt: new Date().toISOString(),
            verified: true
          }
        ];
        localStorage.setItem('tourismUsers', JSON.stringify(demoUsers));
      }
    }
  }
};

export default authUtils;
