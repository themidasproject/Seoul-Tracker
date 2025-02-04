import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../utils/colors'
import { AlertCircle, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Company } from '../types'
import { policyStatuses } from '../db/scoreData'

interface HeaderProps {
  onSelectCompany?: (company: Company) => void;
  companies: Company[];
  grades: Record<string, Record<string, number>>;
}

export default function Header({ onSelectCompany, companies, grades }: HeaderProps) {
  const [showFulfilled, setShowFulfilled] = useState(false);
  const [showUnfulfilled, setShowUnfulfilled] = useState(false);

  const getFulfilledCompanies = () => {
    return companies.filter(company => policyStatuses[company.id] === 'full')
  };

  const getPartiallyFulfilledCompanies = () => {
    return companies.filter(company => policyStatuses[company.id] === 'partial')
  };

  const getUnfulfilledCompanies = () => {
    return companies.filter(company => policyStatuses[company.id] === 'none')
  };

  // Get the counts
  const fulfilledCount = getFulfilledCompanies().length;
  const partialCount = getPartiallyFulfilledCompanies().length;
  const unfulfilledCount = getUnfulfilledCompanies().length;

  return (
    <motion.header 
      className="relative bg-white border-b border-gray-200 z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container-width py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Logo - Desktop */}
          <div className="hidden lg:block">
            <motion.a 
              href="https://www.themidasproject.com" 
              className="relative group"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-black/5 rounded-full blur-md transform group-hover:scale-110 transition-transform" />
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="relative rounded-full ring-2 ring-black/10 group-hover:ring-black/20 transition-all"
                priority
              />
            </motion.a>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            {/* Logo - Mobile Only */}
            <div className="lg:hidden">
              <motion.a 
                href="https://www.themidasproject.com" 
                className="relative group"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-black/10"
                  priority
                />
              </motion.a>
            </div>

            {/* Title & Subtitle */}
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Seoul Commitment Tracker
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 font-medium max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Will AI Companies Keep Their Safety Promises?
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-3 sm:p-4 bg-black/5 backdrop-blur-md rounded-2xl w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <motion.div 
                className="flex items-center space-x-2 text-sm font-medium text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <AlertCircle size={14} className="text-amber-600 shrink-0" />
                <span className="whitespace-nowrap">Deadline: Feb 10, 2025</span>
              </motion.div>

              <div className="hidden sm:block h-4 w-px bg-gray-300" />

              <HoverOrTapStat
                label="Fulfilled"
                number={fulfilledCount.toString()}
                highlight
                companies={getFulfilledCompanies()}
                onSelectCompany={onSelectCompany}
              />

              <div className="hidden sm:block h-4 w-px bg-gray-300" />

              <HoverOrTapStat
                label="Partial"
                number={partialCount.toString()}
                warning
                companies={getPartiallyFulfilledCompanies()}
                onSelectCompany={onSelectCompany}
              />

              <div className="hidden sm:block h-4 w-px bg-gray-300" />

              <HoverOrTapStat
                label="Unfulfilled"
                number={unfulfilledCount.toString()}
                danger
                companies={getUnfulfilledCompanies()}
                onSelectCompany={onSelectCompany}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

function Stat({ 
  number, 
  label, 
  highlight, 
  warning,
  danger,
  showDropdownIcon,
  isOpen
}: { 
  number: string;
  label: string;
  highlight?: boolean;
  warning?: boolean;
  danger?: boolean;
  showDropdownIcon?: boolean;
  isOpen?: boolean;
}) {
  return (
    <div className="text-center leading-tight">
      <div className="flex items-center justify-center">
        <span 
          className={`
            text-xl sm:text-2xl font-bold
            ${highlight ? 'text-green-500' :
              warning ? 'text-amber-400' :
              danger ? 'text-red-500' :
              'text-gray-900'
            }
          `}
        >
          {number}
        </span>
        {showDropdownIcon && (
          <ChevronDown
            size={16}
            className={`
              ml-1 transition-transform
              ${isOpen ? 'opacity-70 rotate-180 translate-y-[1px]' : 'opacity-40'}
              ${highlight ? 'text-green-500' :
                warning ? 'text-amber-400' :
                danger ? 'text-red-500' :
                'text-gray-500'}
            `}
          />
        )}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

/**
 * Combined hover + tap approach:
 * - On desktop (non-touch), open/close via mouse enter/leave
 * - On touch devices, open/close via tap
 */
function HoverOrTapStat({
  label,
  number,
  highlight,
  warning,
  danger,
  companies,
  onSelectCompany,
}: {
  label: string
  number: string
  highlight?: boolean
  warning?: boolean
  danger?: boolean
  companies: Company[]
  onSelectCompany?: (company: Company) => void
}) {
  // Detect if it's a touch-capable device
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // If 'ontouchstart' in window or (maxTouchPoints > 0),
    // we consider it a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
    }
  }, [])

  const [open, setOpen] = useState(false)

  const openDropdown = () => setOpen(true)
  const closeDropdown = () => setOpen(false)
  const toggleDropdown = () => setOpen(o => !o)

  return (
    <div
      className="relative"
      // Hover only if not touch
      onMouseEnter={() => !isTouch && openDropdown()}
      onMouseLeave={() => !isTouch && closeDropdown()}
      // Tap if touch
      onClick={() => isTouch && toggleDropdown()}
    >
      <Stat 
        number={number} 
        label={label} 
        highlight={highlight}
        warning={warning}
        danger={danger}
        showDropdownIcon
        isOpen={open}
      />
      <AnimatePresence>
        {open && (
          <CompanyDropdown
            companies={companies}
            highlight={highlight}
            warning={warning}
            danger={danger}
            onSelect={(company) => {
              closeDropdown()
              onSelectCompany?.(company)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function CompanyDropdown({ 
  companies, 
  onSelect, 
  highlight,
  warning,
  danger 
}: {
  companies: Company[];
  onSelect: (company: Company) => void;
  highlight?: boolean;
  warning?: boolean;
  danger?: boolean;
}) {
  return (
    <motion.div
      className={`
        absolute
        top-full
        // On mobile, center under the stat:
        left-1/2 -translate-x-1/2
        // On desktop, revert to prior alignment:
        sm:left-auto sm:translate-x-0 sm:right-[-2rem]
        mt-1
        py-2
        px-2
        bg-white
        rounded-lg
        shadow-lg
        border
        border-gray-200
        z-[1000]
        // Let it auto-size to content, no scrollbar:
        whitespace-normal
        break-words
      `}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
    >
      {companies.map((company) => (
        <button
          key={company.id}
          className={`
            block
            w-full
            text-left
            px-4
            py-2
            text-sm
            hover:bg-gray-50
            ${
              highlight
                ? 'text-green-600 hover:text-green-700'
                : warning
                  ? 'text-amber-500 hover:text-amber-600'
                  : danger
                    ? 'text-red-600 hover:text-red-700'
                    : 'text-gray-600 hover:text-gray-700'
            }
          `}
          onClick={() => onSelect(company)}
        >
          {company.name}
        </button>
      ))}
    </motion.div>
  )
}

