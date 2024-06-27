const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            <span className="ml-3 text-xl font-semibold text-gray-900 font-lato">LOADING</span>
        </div>
    );
};

export default Loading;