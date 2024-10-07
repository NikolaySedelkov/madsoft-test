import { TTypeTest } from 'shared/types/Tests';

import CheckboxForm from '../ui/partials/CheckboxForm';
import RadioForm from '../ui/partials/RadioForm';

type TSwitchTypeForm = {
    [key in TTypeTest]: typeof CheckboxForm;
};

const switchTypeForm: TSwitchTypeForm = {
    change: CheckboxForm,
    radio: RadioForm,
    text: RadioForm,
    textarea: RadioForm,
};

export default switchTypeForm;
