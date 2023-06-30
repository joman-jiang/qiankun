import { useModel } from "@umijs/max";
import { Select } from "antd";



const UserSelect: React.FC = () => {

    const masterProps = useModel('@@qiankunStateFromMaster');
    console.log(masterProps)
    let {
        globalState: {
            onSelect
        }
    } = masterProps;

    console.log(onSelect)
    const handleChange = (value: string) => {
        
        console.log(onSelect)
        console.log(`selected ${value}`);
        if(onSelect){
            onSelect(value);
        }
    };
    return (
        <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
        />
    );
};

export default UserSelect;
