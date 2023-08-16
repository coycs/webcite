// 图标
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons"
// antd组件
import { Button, List, Space, Switch, Tooltip } from "antd"
import React, { useState } from "react"

// 重置样式
import "antd/dist/reset.css"
// options页面样式
import "~assets/styles/options.scss"

// 模板类型
interface DataType {
  gender?: string
  name: {
    title?: string
    first?: string
    last?: string
  }
  email?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  nat?: string
}

const OptionsIndex: React.FC = () => {
  const [initLoading, setInitLoading] = useState(false)
  const [list, setList] = useState<DataType[]>([
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Riccardo",
        last: "Perrin"
      },
      email: "riccardo.perrin@example.com",
      picture: {
        large: "https://randomuser.me/api/portraits/men/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      nat: "CH"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Dragutin",
        last: "Zekić"
      },
      email: "dragutin.zekic@example.com",
      picture: {
        large: "https://randomuser.me/api/portraits/men/21.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      },
      nat: "RS"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Kasper",
        last: "Latt"
      },
      email: "kasper.latt@example.com",
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
      },
      nat: "FI"
    }
  ])

  return (
    <div className="options">
      <div className="options-header">
        {/* 按钮组 */}
        <Space>
          <Tooltip title="新增模板">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              New
            </Button>
          </Tooltip>
          <Tooltip title="删除选中模板">
            <Button type="primary" icon={<DeleteOutlined />} disabled>
              Delete
            </Button>
          </Tooltip>
        </Space>
      </div>
      <div className="options-content">
        <List
          className="content-list"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a key="list-loadmore-view">view</a>,
                <a key="list-loadmore-edit">edit</a>,
                <Switch key="list-loadmore-more" size="small" defaultChecked />
              ]}>
              <List.Item.Meta title={item.name?.last} />
            </List.Item>
          )}
        />
      </div>
      <div className="options-footer">footer</div>
    </div>
  )
}
export default OptionsIndex
