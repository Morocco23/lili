import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal({ open, onClose, title, children }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="modal-overlay" onClose={onClose}>
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/40" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal relative bg-white rounded-2xl p-7 max-w-lg w-full mx-4 shadow-2xl">
                {title && <h2 style={{ marginBottom: '1.2rem', fontSize: '1.6rem' }}>{title}</h2>}
                {children}
                <button
                  onClick={onClose}
                  style={{
                    marginTop: '1.5rem',
                    padding: '10px 20px',
                    background: '#e5e7eb',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            </Transition.Child>
          </div>
          </div>
        </Dialog>
      </Transition>
  );
}