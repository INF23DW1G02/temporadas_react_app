import { Datagrid, List, NumberField, TextField, NumberInput, EditButton, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Equipa Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />
    
</Filter>


export const OcurrenciaList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="num_faltas" />
            <NumberField source="num_golos" />
            <NumberField source="num_cartao" />
            <TextField source="substituicao" />
            <NumberField source="id_equipa" />
            <NumberField source="id_jogo" />
            <NumberField source="id_jogador" />
            <NumberField source="id_temporada" />
            <EditButton />
        </Datagrid>
    </List>
);



export const OcurrenciaEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput     source="num_faltas" />
            <NumberInput     source="num_golos" />
            <NumberInput     source="num_cartao" />
            <TextInput     source="substituicao" />
            <NumberInput     source="id_equipa" />
            <NumberInput     source="id_jogo" />
            <NumberInput     source="id_jogador" />
            <NumberInput     source="id_temporada" />
        </SimpleForm>
    </Edit>
);

