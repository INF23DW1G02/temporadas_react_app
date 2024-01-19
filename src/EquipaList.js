import { Datagrid, List, NumberField, TextField, NumberInput, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Equipa Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>


export const EquipaList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <NumberField source="id_temporada" />
            <EditButton />
        </Datagrid>
    </List>



);

export const EquipaEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="id_temporada" />
        </SimpleForm>
    </Edit>
);