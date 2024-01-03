import { Button, Space } from 'antd';
import useFetchApi from '../until/customHook/useFetch';
import useToggle from '../until/customHook/useToggle';

const DemoCustomhook = () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const response = useFetchApi(api);

  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <Button onClick={() => toggleValue(!value)} type="dashed">
        onToggle
      </Button>

      <Space size={[8, 16]} wrap>
        {response?.data &&
          response?.data.map((item) => {
            return (
              <Button type={value ? 'primary' : 'dashed'} danger key={item.id}>
                {item.name}
              </Button>
            );
          })}
      </Space>
    </>
  );
};

export default DemoCustomhook;
