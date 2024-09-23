import React, { useState } from 'react';

const RoleBasedAccessControl = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Viewer' },
    { id: 2, name: 'Bob', role: 'Editor' },
    { id: 3, name: 'Charlie', role: 'Admin' },
  ]);

  const roles = ['Admin', 'Editor', 'Viewer'];

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    console.log('Roles updated:', updatedUsers); // Implement assignRoles() here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">Role Management</h2>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">User Name</th>
              <th className="py-3 px-6 text-left">Current Role</th>
              <th className="py-3 px-6 text-left">Assign New Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="border bg-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleBasedAccessControl;
