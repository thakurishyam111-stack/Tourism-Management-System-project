'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import authUtils from '@/utils/authUtils'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  React.useEffect(() => {
    // Initialize demo users on first load
    authUtils.initializeDemoUsers()

    const savedEmail = localStorage.getItem('rememberedEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }
  }, [])

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation checks
    if (!email.trim() || !password.trim()) {
      setError('⚠️ Email and password are required.')
      return
    }

    if (!validateEmail(email)) {
      setError('⚠️ Please enter a valid email address.')
      return
    }

    if (password.length < 6) {
      setError('⚠️ Password must be at least 6 characters long.')
      return
    }

    try {
      setLoading(true)

      // Authenticate user
      const user = authUtils.loginUser(email, password)

      if (!user) {
        setError('❌ Invalid email or password. Please try again.')
        setLoading(false)
        return
      }

      setSuccess('✅ Login successful! Redirecting to dashboard...')

      // Store credentials if remember me is checked
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email)
      } else {
        localStorage.removeItem('rememberedEmail')
      }

      // Clear form and redirect
      setTimeout(() => {
        setEmail('')
        setPassword('')
        setRememberMe(false)
        router.push('/profile')
      }, 1500)

    } catch (err) {
      setError('❌ Login failed. Please try again.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md px-6 py-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-10 text-white">
            <h1 className="text-3xl font-bold text-center mb-2">🌟 Nepal Tourism</h1>
            <p className="text-center text-blue-100 text-lg">Welcome Back</p>
          </div>

          {/* Form Section */}
          <div className="px-6 py-8">

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-slideIn">
                <p className="text-red-700 text-sm font-semibold">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg animate-slideIn">
                <p className="text-green-700 text-sm font-semibold">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  📧 Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 disabled:bg-gray-100"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  🔒 Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="w-full px-4 py-3 border-2 text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 disabled:bg-gray-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute right-3 top-3 text-gray-600 hover:text-blue-600 disabled:opacity-50 transition"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-gray-700 cursor-pointer hover:text-gray-900">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800 font-semibold transition">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed opacity-80'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 active:scale-95'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Signing in...
                  </span>
                ) : (
                  '🚀 Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t-2 border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm font-medium">or</span>
              <div className="flex-1 border-t-2 border-gray-300"></div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-700 font-medium">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-800 font-bold transition">
                Create one now
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-center text-gray-600 text-xs">
              © 2024 Nepal Tourism Management. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage