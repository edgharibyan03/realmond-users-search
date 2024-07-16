import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { userItem } from '../../interfaces/main';
import { fetchUsers } from '../../api';
import UserCard from '../UserCard';
import { filterUsersList } from '../../utils/users';


const UserList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [users, setUsers] = useState<userItem[]>([]);

  const filteredUsers = useMemo(() => filterUsersList(searchTerm, users), [searchTerm, users])

  const handleSetSearchTerm = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users.slice(0, 9));
    };
    getUsers();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={e => handleSetSearchTerm(e.target.value)}
        className="p-3 border bg-white text-black border-gray-300 rounded mb-6 w-full sm:w-1/2 lg:w-1/3"
      />
      <div className="flex flex-wrap justify-center">
        {filteredUsers.map(user => (
          <UserCard key={user.id} name={user.name} email={user.email} phone={user.phone} />
        ))}
      </div>
    </div>
  );
};

export default UserList;