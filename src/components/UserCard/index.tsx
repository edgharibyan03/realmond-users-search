import React from 'react';

interface UserProps {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
}

const UserCard: React.FC<UserProps> = ({ name, email, phone }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 transition-transform transform hover:scale-105 min-w-80">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{name.firstname} {name.lastname}</h2>
      <p className="text-gray-600 mb-1">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
    </div>
  );
};

export default UserCard;