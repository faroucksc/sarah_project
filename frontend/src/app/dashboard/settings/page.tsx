'use client'

import { useState, useEffect } from 'react'

interface UserSettings {
  emailNotifications: boolean
  studyReminders: boolean
  darkMode: boolean
  cardsPerStudySession: number
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings>({
    emailNotifications: true,
    studyReminders: true,
    darkMode: false,
    cardsPerStudySession: 20
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true)
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          throw new Error('Not authenticated')
        }

        // In a real implementation, you would fetch user settings from the API
        // For now, we'll use the default values
        
        // Mock API call
        // const response = await fetch('/api/user/settings', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // })
        
        // if (!response.ok) {
        //   throw new Error('Failed to fetch settings')
        // }
        
        // const data = await response.json()
        // setSettings(data)
        
        // Using default settings for now
        setSettings({
          emailNotifications: true,
          studyReminders: true,
          darkMode: false,
          cardsPerStudySession: 20
        })
      } catch (err: any) {
        setError(err.message || 'An error occurred')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSettings()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) : value
    }))
    
    // Reset saved status when changes are made
    setIsSaved(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Not authenticated')
      }

      // In a real implementation, you would save settings to the API
      // For now, we'll just simulate a successful save
      
      // Mock API call
      // const response = await fetch('/api/user/settings', {
      //   method: 'PUT',
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(settings)
      // })
      
      // if (!response.ok) {
      //   throw new Error('Failed to save settings')
      // }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsSaved(true)
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setIsSaved(false)
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {isSaved && (
          <div className="rounded-md bg-green-50 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Success</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Your settings have been saved successfully.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="emailNotifications"
                          name="emailNotifications"
                          type="checkbox"
                          checked={settings.emailNotifications}
                          onChange={handleChange}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="emailNotifications" className="font-medium text-gray-700">Email notifications</label>
                        <p className="text-gray-500">Receive email notifications about your study progress and new features.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="studyReminders"
                          name="studyReminders"
                          type="checkbox"
                          checked={settings.studyReminders}
                          onChange={handleChange}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="studyReminders" className="font-medium text-gray-700">Study reminders</label>
                        <p className="text-gray-500">Receive reminders to study your flashcards regularly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Appearance</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="darkMode"
                          name="darkMode"
                          type="checkbox"
                          checked={settings.darkMode}
                          onChange={handleChange}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="darkMode" className="font-medium text-gray-700">Dark mode</label>
                        <p className="text-gray-500">Use dark theme for the application.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Study Settings</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="cardsPerStudySession" className="block text-sm font-medium text-gray-700">
                        Cards per study session
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="cardsPerStudySession"
                          id="cardsPerStudySession"
                          min="5"
                          max="100"
                          value={settings.cardsPerStudySession}
                          onChange={handleChange}
                          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:w-64 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Number of flashcards to show in each study session.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 mt-6">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      // Reset to default settings
                      setSettings({
                        emailNotifications: true,
                        studyReminders: true,
                        darkMode: false,
                        cardsPerStudySession: 20
                      })
                      setIsSaved(false)
                    }}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Reset to Default
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {isLoading ? 'Saving...' : 'Save Settings'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
