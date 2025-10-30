import React from 'react'
import { roles } from '../utils/data'

export default function Roles() {
  return (
     /* Roles Section */
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Roles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of positions that match your skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#6A5ACD]/10 to-[#20B2AA]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <role.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  )
}
