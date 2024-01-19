import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Jogador Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>

export const TemporadaList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <EditButton />
        </Datagrid>
    </List>
);


export const TemporadaEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);