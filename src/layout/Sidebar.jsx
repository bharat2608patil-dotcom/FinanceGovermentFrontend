import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  Menu, 
  ChevronLeft, 
  Plus, 
  Zap, 
  BarChart2, 
  BarChart3, 
  X, 
  UserCheck, 
  FileText, 
  Users, 
  UserPlus, 
  ClipboardList, 
  Settings, 
  FileCheck, 
  User, 
  LayoutDashboard,
  Search,
  History,
  CreditCard
} from 'lucide-react';
import './Sidebar.css';

export const Sidebar = ({ onToggle, initialState = true }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationItems = [
    // --- COMPLIANCE ROUTES ---
    { id: 101, label: 'Compliance Dashboard', to: '/compliance', icon: BarChart2 },
    { id: 102, label: 'All Compliance', to: '/compliance/list', icon: ClipboardList },
    { id: 103, label: 'Create Compliance', to: '/compliance/create', icon: Plus },

    // --- AUDITOR ROUTES ---
    { id: 201, label: 'Audit Dashboard', to: '/audit', icon: BarChart2 },
    { id: 202, label: 'All Audits', to: '/audit/list', icon: Zap },
    { id: 203, label: 'Create Audit', to: '/audit/create', icon: Plus },
    { id: 204, label: 'View Reports', to: '/reports', icon: FileText },
    { id: 205, label: 'Create Report', to: '/reports/create', icon: Plus },
    { id: 206, label: 'View Analytics', to: '/reports/analytics', icon: BarChart3 },

    // --- BUDGET & PROGRAM ROUTES ---
    { id: 301, label: 'Dashboard', to: '/', icon: LayoutDashboard },
    { id: 302, label: 'Create Programs', to: '/create-programs', icon: Plus },
    { id: 303, label: 'Create Budget', to: '/create-budget', icon: Plus },
    { id: 304, label: 'Allocate Resources', to: '/allocate-resources', icon: Zap },
    { id: 305, label: 'View Summary', to: '/budget-summary', icon: BarChart2 },

    // --- ADMIN ROUTES ---
    { id: 401, label: 'Admin Dashboard', to: '/admin/dashboard', icon: BarChart2 },
    { id: 402, label: 'Admin Analytics', to: '/admin/analytics', icon: BarChart3 },
    { id: 403, label: 'All Users', to: '/admin/users', icon: Users },
    { id: 404, label: 'Create Officer', to: '/admin/create-officer', icon: UserPlus },
    { id: 405, label: 'Citizen Management', to: '/admin/citizen-management', icon: UserCheck },
    { id: 406, label: 'Document Verification', to: '/admin/document-verification', icon: FileCheck },
    { id: 407, label: 'Audit Logs', to: '/admin/audit-logs', icon: ClipboardList },
    { id: 408, label: 'Settings', to: '/admin/settings', icon: Settings },

    // --- OFFICER ROUTES ---
    { id: 501, label: 'Approve Applications', to: '/officer/applications', icon: FileCheck },
    { id: 502, label: 'View Applications', to: '/officer/all-applications', icon: ClipboardList },
    { id: 503, label: 'Citizen Search', to: '/officer/citizen-search', icon: Search },
    { id: 504, label: 'Verify Taxation', to: '/officer/verify-taxation', icon: Zap },
    { id: 505, label: 'Verify Disclosure', to: '/officer/verify-disclosure', icon: FileText },

    // --- CITIZEN ROUTES ---
    { id: 601, label: 'Citizen Registration', to: '/registration', icon: UserCheck },
    { id: 602, label: 'Upload Documents', to: '/documents', icon: FileText },
    { id: 603, label: 'Create Disclosure', to: '/citizen/create-disclosure', icon: FileText },
    { id: 604, label: 'Create Taxation', to: '/citizen/create-taxation', icon: Plus },
    { id: 605, label: 'My Taxation History', to: '/citizen/my-taxation-history', icon: History },
    { id: 606, label: 'Tax Payment', to: '/citizen/payment', icon: CreditCard },
    { id: 607, label: 'My Disclosure History', to: '/citizen/my-disclosure-history', icon: History },
  ];

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        className="sidebar-toggle-mobile"
        onClick={toggleMobileSidebar}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="sidebar-overlay"
            onClick={toggleMobileSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`sidebar ${isOpen ? 'expanded' : 'collapsed'} ${isMobileOpen ? 'mobile-open' : ''
          }`}
        initial={false}
        animate={{
          width: isOpen ? '280px' : '80px',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Desktop Toggle Button */}
        <motion.button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </motion.button>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }} // Faster stagger
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon size={20} />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavLink>
              </motion.div>
            );
          })}
        </nav>

        {/* Footer Info */}
        {isOpen && (
          <motion.div
            className="sidebar-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="sidebar-info">
              <p className="text-muted">System Version</p>
              <p className="version">1.0.0</p>
            </div>
          </motion.div>
        )}
      </motion.aside>
    </>
  );
};

export default Sidebar;