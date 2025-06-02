interface ToastProps {
    message: string;
    type: 'success' | 'error';
    show: boolean;
    onClose: () => void;
}

export default function Toast({ message, type, show, onClose }: ToastProps) {
    if (!show) return null;

    // Automatically hide the toast after 3 seconds
    setTimeout(onClose, 3000);

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
            <div className={`rounded-lg p-4 shadow-lg ${
                type === 'success' 
                    ? 'bg-green-100 border border-green-200' 
                    : 'bg-red-100 border border-red-200'
            }`}>
                <div className="flex items-center gap-2">
                    {type === 'success' ? (
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9.344-2.998c0-.696-.156-1.104-.386-1.524-.368-.675-.896-1.097-1.538-1.097-.966 0-1.688.786-1.688 1.786v.222c0 .824.42 1.5 1.209 1.5.686 0 1.264-.437 1.264-1.236 0-.366-.078-.733-.078-1.098-.032-.367-.087-.733-.087-1.1 0-1.498 1.343-2.712 3-2.712 1.653 0 3 1.214 3 2.712 0 .367-.055.733-.087 1.1-.032.365-.078.732-.078 1.098 0 .799.578 1.236 1.264 1.236.789 0 1.209-.676 1.209-1.5v-.222c0-1-.722-1.786-1.688-1.786-.642 0-1.17.422-1.538 1.097-.23.42-.386.828-.386 1.524" />
                        </svg>
                    )}
                    <p className={`text-sm font-medium ${
                        type === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}>
                        {message}
                    </p>
                    <button
                        onClick={onClose}
                        className={`ml-4 inline-flex rounded-md p-1.5 hover:bg-opacity-80 ${
                            type === 'success' 
                                ? 'text-green-600 hover:bg-green-200' 
                                : 'text-red-600 hover:bg-red-200'
                        }`}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
} 