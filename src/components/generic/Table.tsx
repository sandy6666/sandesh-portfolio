const Table = ({data}: { data: any }) => {
    const headers = Object.keys(data[0]);
    return (
        <div className="flex w-full flex-col border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex bg-gray-200 font-semibold text-gray-700">
                {headers.map((header, key) => (
                    <div key={key} className="p-3 flex-1 text-center border-r last:border-r-0 font-bold border-gray-300">
                        {header
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </div>
                ))}
            </div>
            <div className="divide-y divide-gray-300">
                {data.map((item: any, index: any) => (
                    <div className="flex hover:bg-gray-100" key={index}>
                        {Object.values(item).map((value: any, id) => (
                            <div key={id} className="p-3 flex-1 text-center border-r last:border-r-0 border-gray-300">
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;