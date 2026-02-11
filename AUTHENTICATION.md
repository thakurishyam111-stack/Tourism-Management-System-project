# Authentication System Documentation

## Overview

This tourism management system includes a complete authentication system with login, registration, password reset, and user profile management features.

## Features Implemented

### 1. **Login Page** (`/app/Login/loginpage.jsx`)

- Email and password authentication
- Form validation
- Remember me functionality
- Show/hide password toggle
- Error and success messages
- Loading states with visual feedback
- Links to registration and forgot password pages

### 2. **Registration Page** (`/app/register/page.jsx`)

- Full name, email, phone, and password fields
- Password strength indicator with visual feedback
- Password confirmation matching
- Email validation
- Phone number validation
- Terms and conditions acceptance
- Form submission with validation
- Duplicate email prevention

### 3. **Forgot Password Page** (`/app/forgot-password/page.jsx`)

- 3-step password reset process:
  1. Email verification
  2. Code verification
  3. New password setup
- Verification code generation
- Error handling and validation

### 4. **User Profile Page** (`/app/profile/page.jsx`)

- View user information (name, email, phone, member since)
- Edit profile functionality
- View user bookings
- Change password with security validation
- Logout functionality

### 5. **Authentication Utilities** (`/utils/authUtils.js`)

- `isLoggedIn()` - Check if user is logged in
- `getCurrentUser()` - Get current user session
- `loginUser()` - Authenticate user
- `registerUser()` - Create new user account
- `logoutUser()` - Clear session
- `updateUserProfile()` - Update user information
- `changePassword()` - Change user password
- `initializeDemoUsers()` - Initialize demo accounts

## Demo Accounts (Auto-initialized)

### Account 1:

- **Email:** shyam@tourismnepal.com
- **Password:** Password123!

### Account 2:

- **Email:** admin@tourismnepal.com
- **Password:** Admin@12345

## Data Storage

All data is stored in browser's localStorage:

- `tourismUsers` - Array of all registered users
- `currentUser` - Current logged-in user session
- `rememberedEmail` - Saved email for "Remember Me"
- `resetCode` - Temporary password reset code
- `resetEmail` - Email being reset

## Password Requirements

- Minimum 8 characters
- Mix of uppercase and lowercase letters
- Numbers required
- Special characters recommended
- Visual strength indicator in registration

## Security Features

- Password strength validation
- Email duplication prevention
- Session management with currentUser
- Remember me for convenience
- Password change functionality
- 3-step password reset with verification

## File Structure

```
app/
├── Login/
│   └── loginpage.jsx          # Login page
├── register/
│   └── page.jsx               # Registration page
├── forgot-password/
│   └── page.jsx               # Password reset page
├── profile/
│   └── page.jsx               # User profile page
└── admin/
    └── Booking/
        └── Book.jsx           # Booking management

utils/
└── authUtils.js               # Authentication utilities
```

## Usage Examples

### Check if User is Logged In

```javascript
const user = authUtils.getCurrentUser();
if (!user) {
  // Redirect to login
  router.push("/login");
}
```

### Login User

```javascript
const user = authUtils.loginUser(email, password);
if (user) {
  // User logged in successfully
  router.push("/profile");
}
```

### Register User

```javascript
const result = authUtils.registerUser({
  name: "John Doe",
  email: "john@example.com",
  phone: "9841234567",
  password: "SecurePass123!",
});

if (result.success) {
  // User registered successfully
  router.push("/login");
}
```

### Logout User

```javascript
authUtils.logoutUser();
router.push("/login");
```

### Update Profile

```javascript
authUtils.updateUserProfile(userId, {
  name: "Jane Doe",
  phone: "9845678901",
});
```

## Navigation Flow

```
Home Page
├── Login → Profile (if logged in)
│   ├── Edit Profile
│   ├── View Bookings
│   ├── Change Password
│   └── Logout
├── Register → Login
└── Forgot Password → Reset Password → Login
```

## Important Notes

⚠️ **Current Limitations (For Production Use):**

1. Passwords are stored in plain text (use bcrypt for production)
2. Data is stored in localStorage (use backend database for production)
3. No email verification implemented
4. No password reset email delivery
5. No token-based authentication

## Future Enhancements

- [ ] Backend API integration
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] Password hashing with bcrypt
- [ ] JWT token authentication
- [ ] Email verification
- [ ] Email password reset
- [ ] Two-factor authentication (2FA)
- [ ] Google/Facebook OAuth integration
- [ ] Session timeout management
- [ ] Account recovery options

## Testing the System

### Step 1: Open Login Page

Navigate to `/login`

### Step 2: Register (Optional)

- Click "Create one now"
- Fill in all required fields
- Accept terms and conditions
- Submit form

### Step 3: Login

- Use registered credentials or demo accounts
- Check "Remember Me" to save email
- Click "Sign In"

### Step 4: View Profile

- After login, redirected to `/profile`
- View and edit profile information
- Change password
- View bookings
- Logout

## Troubleshooting

### "Email already registered" error

- The email is already in use
- Use a different email or login with existing account

### "Invalid password" error

- Password doesn't match stored password
- Try forgot password if you forgot it

### Session lost after refresh

- Session is cleared on browser refresh (localStorage persists)
- Use "Remember Me" to keep email saved

## Contact & Support

For issues or feature requests, contact the development team.

---

**Last Updated:** February 9, 2026
**Version:** 1.0.0
