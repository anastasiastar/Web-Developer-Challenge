import React, {Component} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'title', headerName: 'Title', width: 270 },
    { field: 'author_name', headerName: 'Author Name', width: 270 },
    { field: 'first_publish_year', headerName: 'AFirst Publish Year', width: 270 },
    { field: 'language', headerName: 'Language', width: 270 },
    { field: 'publisher', headerName: 'Publisher ', width: 270 }

]

export default class ResultsTable extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
             <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={this.props.searchData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={rows => rows.key}
      />
    </div>
        )}
}