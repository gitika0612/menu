import MUIDataTable from "mui-datatables";

const DataTable = ({title}) => {
    const columns = [{
        name: 'services',
        label: 'Services',
        options: {
            filter: true,
        }
        },
        {
            name: 'price',
            label: 'Price',
            options: {
                filter: true,
            }
        }
    ]

    const options = {
        search: false,
        print: false, 
        download: false,
        selectableRows: false,
      
    }

    return(
        <>
            <MUIDataTable title={title} columns={columns} options={options} />
        </>
    );
}

export default DataTable;



