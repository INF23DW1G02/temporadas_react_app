import { Datagrid, List, NumberField, TextField, NumberInput, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Jogador Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>

export const JogadorList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <NumberField source="numero" />
            <NumberField source="id_equipa" />
            <EditButton />
        </Datagrid>
    </List>
);




export const JogadorEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="numero" />
            <NumberInput source="id_equipa" />
        </SimpleForm>
    </Edit>
);