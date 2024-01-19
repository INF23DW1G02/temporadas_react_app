import { Datagrid, List, NumberField, TextField, NumberInput, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Equipa Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>

export const EstatisticaList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="golos_marcados" />
            <NumberField source="golos_sofridos" />
            <NumberField source="faltas_sofridas" />
            <NumberField source="faltas_feitas" />
            <NumberField source="id_temporada" />
            <NumberField source="id_equipa" />
            <NumberField source="id_jogador" />
            <EditButton />
        </Datagrid>
    </List>
);



export const EstatisticaEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextField source="id" />
            <NumberInput source="golos_marcados" />
            <NumberInput source="golos_sofridos" />
            <NumberInput source="faltas_sofridas" />
            <NumberInput source="faltas_feitas" />
            <NumberInput source="id_temporada" />
            <NumberInput source="id_equipa" />
            <NumberInput source="id_jogador" />
        </SimpleForm>
    </Edit>
);