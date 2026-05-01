'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  careType: string
  location: string
  contactMethod: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  careType: '',
  location: '',
  contactMethod: 'phone',
  message: '',
}

const careTypes = [
  'Personal Care',
  'Live-in Care',
  'Dementia Care',
  'Respite Care',
  'End-of-Life Care',
  'Hospital Discharge Support',
  'Companionship & Domestic Support',
  'Overnight Care',
  '24-Hour Care',
  'Not sure – please advise',
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter a phone number.'
    if (!formData.message.trim()) newErrors.message = 'Please tell us a little about your situation.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(initialFormData)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-teal-50 p-12 text-center ring-1 ring-teal-200">
        <CheckCircle className="mb-4 h-14 w-14 text-teal-500" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-bold text-navy-800 mb-3">
          Thank You for Getting in Touch
        </h3>
        <p className="text-gray-600 max-w-md leading-relaxed">
          We&apos;ve received your enquiry and will be in touch with you very shortly. If your need is
          urgent, please call us directly on{' '}
          <a href="tel:07883024345" className="font-semibold text-teal-600 hover:text-teal-700">
            07883 024345
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-gray-500 underline hover:text-gray-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (field: keyof FormData) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500',
      errors[field] ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-500'
    )

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Care enquiry form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClass('name')}
            placeholder="Your full name"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={fieldClass('email')}
            placeholder="your@email.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass('phone')}
            placeholder="07xxx xxxxxx"
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-navy-800">
            Your Location / Town
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className={fieldClass('location')}
            placeholder="e.g. Beeston, Nottingham"
          />
        </div>

        {/* Care Type */}
        <div className="sm:col-span-2">
          <label htmlFor="careType" className="mb-1.5 block text-sm font-medium text-navy-800">
            Type of Care Needed
          </label>
          <select
            id="careType"
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            className={cn(fieldClass('careType'), 'cursor-pointer')}
          >
            <option value="">Please select a care type</option>
            {careTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div className="sm:col-span-2">
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-navy-800">
              Preferred Contact Method
            </legend>
            <div className="flex flex-wrap gap-4">
              {['phone', 'email', 'either'].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={handleChange}
                    className="h-4 w-4 accent-teal-600"
                  />
                  <span className="text-sm text-navy-700 capitalize">{method}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
            Tell Us About Your Situation <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={cn(fieldClass('message'), 'resize-none')}
            placeholder="Please share a little about who needs care, their situation, and what kind of support you're looking for. We'll use this to give you the most helpful advice."
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200" role="alert">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Something went wrong. Please try again or call us directly on 07883 024345.
        </div>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full sm:w-auto text-base px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Enquiry
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-gray-500">
          By submitting this form you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          . We will never share your information with third parties.
        </p>
      </div>
    </form>
  )
}
