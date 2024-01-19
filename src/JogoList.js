import { Datagrid, List, NumberField, TextField, NumberInput, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Jogo Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>

export const JogoList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="resultado" />
            <NumberField source="id_equipa" />
            <EditButton />
        </Datagrid>
    </List>
);


export const JogoEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="resultado" />
            <NumberInput source="id_equipa" />
        </SimpleForm>
    </Edit>
);