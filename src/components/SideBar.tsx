
"use client";
import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Settings, 
  Bell, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';



const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { index:'1', icon: Home, label: 'Dashboard', active: true },
    { index:'2', icon: BarChart3, label: 'Analytics' },
    { index:'3', icon: FileText, label: 'Projects' },
    { index:'4', icon: MessageSquare, label: 'Messages', badge: '3' },
    { index:'5', icon: Calendar, label: 'Calendar' },
    { index:'6', icon: Bell, label: 'Notifications', badge: '12' },
    { index:'7', icon: Settings, label: 'Settings' },
  ];

  const [menuItemsState,setMenuItems] = useState(menuItems);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    const currentIndex = target.getAttribute('id');
    console.log("Clicked item index:", currentIndex);
    
    menuItemsState.forEach((item) => {
        item.active = item.index === currentIndex;
    });
    
    setMenuItems([...menuItemsState])
}

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-80'} bg-white shadow-xl transition-all duration-300 ease-in-out flex flex-col`}>
        
        {/* Header */}

        {/* Profile Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john.doe@company.com</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs text-green-600">Online</span>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Navigation */}
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            {menuItemsState.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.index} id={item.index.toString()} onClick={handleClick}>
                  <a
                    href="#"
                    className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                      item.active
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={`${isCollapsed ? 'mx-auto' : 'mr-3'} ${
                        item.active ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                      }`} 
                    />
                    {!isCollapsed && (
                      <>
                        <span className="font-medium flex-1">{item.label}</span>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.active 
                              ? 'bg-white bg-opacity-20 text-white' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Actions */}
        <div className="p-4 border-t border-gray-100">
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <User size={20} className={`${isCollapsed ? 'mx-auto' : 'mr-3'} text-gray-400`} />
              {!isCollapsed && <span className="font-medium">Profile</span>}
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <LogOut size={20} className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
              {!isCollapsed && <span className="font-medium">Sign Out</span>}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;