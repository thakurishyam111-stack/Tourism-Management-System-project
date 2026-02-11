'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import authUtils from '@/utils/authUtils'

const ProfilePage = () => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)
  const [userBookings, setUserBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const user = authUtils.getCurrentUser()
    if (!user) {
      router.push('/login')
      return
    }
    setCurrentUser(user)
    setEditData({ name: user.name, phone: user.phone })

    // Load user's bookings
    const bookings = JSON.parse(localStorage.getItem('tourismBookings') || '[]')
    const userBookings = bookings.filter(b => b.userId === user.userId)
    setUserBookings(userBookings)

    setLoading(false)
  }, [router])

  const handleLogout = () => {
    authUtils.logoutUser()
    setMessage({ type: 'success', text: 'Logged out successfully!' })
    setTimeout(() => {
      router.push('/login')
    }, 1000)
  }

  const handleEditProfile = (e) => {
    e.preventDefault()
    if (!editData.name.trim() || !editData.phone.trim()) {
      setMessage({ type: 'error', text: 'All fields are required' })
      return
    }

    authUtils.updateUserProfile(currentUser.userId, {
      name: editData.name,
      phone: editData.phone
    })

    const updatedUser = authUtils.getCurrentUser()
    setCurrentUser(updatedUser)
    setIsEditing(false)
    setMessage({ type: 'success', text: 'Profile updated successfully!' })
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (!passwordData.oldPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'All password fields are required' })
      return
    }

    if (passwordData.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'New password must be at least 8 characters' })
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      return
    }

    const result = authUtils.changePassword(currentUser.email, passwordData.oldPassword, passwordData.newPassword)
    
    if (result.error) {
      setMessage({ type: 'error', text: result.error })
    } else {
      setMessage({ type: 'success', text: 'Password changed successfully!' })
      setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-gray-600 font-semibold">Loading your profile...</p>
        </div>
      </div>
    )
  }

  if (!currentUser) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">👤 {currentUser.name}</h1>
              <p className="text-blue-100 text-lg">Welcome back to Nepal Tourism</p>
              <p className="text-blue-100 text-sm mt-2">📧 {currentUser.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold transition"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg border-l-4 ${
            message.type === 'error' 
              ? 'bg-red-50 border-red-500 text-red-700' 
              : 'bg-green-50 border-green-500 text-green-700'
          }`}>
            <p className="font-semibold">{message.text}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'profile'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            👤 Profile
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'bookings'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📚 My Bookings ({userBookings.length})
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'security'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            🔒 Security
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Information</h2>

            {isEditing ? (
              <form onSubmit={handleEditProfile} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">👤 Full Name</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">📧 Email (Read-only)</label>
                  <input
                    type="email"
                    value={currentUser.email}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">📱 Phone Number</label>
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                  >
                    ✓ Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false)
                      setEditData({ name: currentUser.name, phone: currentUser.phone })
                    }}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition"
                  >
                    ✕ Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Full Name</p>
                    <p className="text-2xl font-bold text-gray-800">{currentUser.name}</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Email</p>
                    <p className="text-xl font-bold text-gray-800">{currentUser.email}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Phone</p>
                    <p className="text-xl font-bold text-gray-800">{currentUser.phone}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Member Since</p>
                    <p className="text-xl font-bold text-gray-800">
                      {new Date(currentUser.loginTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  ✏️ Edit Profile
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">My Bookings</h2>

            {userBookings.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="px-4 py-3 text-left font-bold text-gray-700">Destination</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-700">Date</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-700">Guests</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                        <td className="px-4 py-3 font-semibold text-gray-800">{booking.place}</td>
                        <td className="px-4 py-3 text-gray-700">{booking.date}</td>
                        <td className="px-4 py-3 text-gray-700">{booking.guests}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">🎒 No bookings yet</p>
                <Link
                  href="/admin/Booking"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Make your first booking
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>

            <form onSubmit={handleChangePassword} className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🔒 Old Password</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🔒 New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-600 mt-2">Min. 8 characters with uppercase, lowercase, numbers</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🔒 Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                🔄 Change Password
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚠️ Danger Zone</h3>
              <p className="text-gray-600 mb-4">Delete your account and all associated data</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                🗑️ Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
