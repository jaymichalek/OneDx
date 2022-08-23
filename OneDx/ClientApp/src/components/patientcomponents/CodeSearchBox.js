import React from 'react';

export function CodeSearchBox() {
    const [Def, setDef] = useState('');
    new Def.Autocompleter.Search('icd10', 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name', {
        tableFormat: true,
        valueCols: [0],
        colHeaders: ['Code', 'Name']
    });
    return (
        <input type="text" id="icd10" placeholder="Code or name" />
    );
}