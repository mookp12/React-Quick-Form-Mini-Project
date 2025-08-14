

function ResultForm({ data, onBack }) {
  if (!data) {
    return <div>No data received</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Form Submitted Successfully!</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg w-full mb-6">
        <h2 className="text-lg font-semibold mb-3">Submitted Data:</h2>
        
        <div className="space-y-2">
          <div>
            <span className="font-medium">Name:</span>
            <span className="ml-2">{data.name}</span>
          </div>
          
          <div>
            <span className="font-medium">Email:</span>
            <span className="ml-2">{data.email}</span>
          </div>
          
          <div>
            <span className="font-medium">Favorite Movie:</span>
            <span className="ml-2">{data.movie}</span>
          </div>
          
          {data.comment && (
            <div>
              <span className="font-medium">Comment:</span>
              <div className="ml-2 mt-1 p-2 bg-white rounded border">
                {data.comment}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={onBack}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
      >
        Back to Form
      </button>
    </div>
  );
}

export default ResultForm;