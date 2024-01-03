import { useId, useMemo, useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import { TableOutlined } from '@ant-design/icons';

let count = 0;

const RenderArrayObject = ({ result, onDelete, isloading }) => {
  const [isDark, setIsDark] = useState(false);

  const deleteItem = (objItem, indexItem) => {
    // to do something
    // callback from parent
    onDelete(objItem, indexItem);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <a style={{ color: 'red' }} key={name}>
          {name} ***
        </a>
      ),
      with: '25%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, item, index) => {
        // to do something
        console.log('item', count++);
        return (
          <>
            <Button
              type="primary"
              danger
              onClick={() => deleteItem(item, index)}
            >
              Delete
            </Button>

            <Link to={`editUser/${item.id}`}>
              <Button>Edit</Button>
            </Link>
          </>
        );
      },
    },
  ];

  const renderList = (arr) => {
    const renderMemoList = useMemo(
      () => (
        <Table
          columns={columns}
          dataSource={arr}
          rowKey={(el) => el.id}
          loading={isloading}
          size={'small'}
        />
      ),
      [arr.length]
    );

    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <div>
          <TableOutlined
            rotate={180}
            spin={isDark}
            style={{ color: isDark ? 'black' : 'green', fontSize: '50px' }}
          />
        </div>
        <hr />
        {renderMemoList}
      </>
    );
  };
  return (
    <>
      <div className="flex justify-between">
        <h4 className="italic text-regalBlue text-bold">
          Danh sách người dùng
        </h4>
        <Link to="/addUser">
          <button>Add new Item</button>
        </Link>
      </div>
      {renderList(result)}
    </>
  );
};

export default RenderArrayObject;
// const objInfo = [
//   {
//     name: 'Anh Duc',
//     age: 18,
//     address: 'Ha Tinh',
//     info: [1, 2, 3, 4],
//   },
//   {
//     name: 'Duc Manh',
//     age: 28,
//     address: 'Ha Tay',
//     info: [4, 0, 1, 4],
//   },
//   {
//     name: 'Hoang Son',
//     age: 38,
//     address: 'Ha Noi',
//     info: [1, 4, 3, 4],
//   },
// ];
