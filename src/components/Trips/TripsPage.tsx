import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {getCurrentPage, getIsFetching, getPerPage, getTotalCount, getTrips} from '../../redux/selectors'
import {Trips} from './Trips'
import {Button, Divider, Form, Input, Select, Skeleton, Space} from 'antd'
import Title from 'antd/es/typography/Title'
import {actions, requestTrips} from '../../redux/tripsReducer'
import Preloader from '../Preloader/Preloader'
import TripPagination from './TripPagination'

const {Option} = Select

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 18}
}

const tailLayout = {
  wrapperCol: {offset: 6, span: 18}
}

const tripSearchValues = {
  search: '',
  country: [] as Array<number>
}
export type tripSearchValuesType = typeof tripSearchValues

const TripsPage = () => {

  const isFetching = useSelector(getIsFetching)
  let currentPageNumber = useSelector(getCurrentPage)
  const perPage = useSelector(getPerPage)
  const trips = useSelector(getTrips)
  const totalCount = useSelector(getTotalCount)
  const dispatch = useDispatch()
  let [searchValues, setSearchValues] = useState(tripSearchValues)

  const [form] = Form.useForm()

  useEffect(() => {
      dispatch(requestTrips(currentPageNumber, perPage, searchValues))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValues, currentPageNumber, perPage])

  const onFinish = (values: tripSearchValuesType) => {
    if (searchValues.country.length !== 0 && searchValues.country !== values.country) {
      currentPageNumber = 1
      dispatch(actions.setCurrentPage(currentPageNumber))
    }
    const result = {
      search: values.search,
      country: values.country ? values.country : []
    }
    setSearchValues({...result})
  }

  const onReset = () => {
    form.resetFields()
  }

  return <section>
    <Divider orientation="left">
      <Title level={1}>Unsere Reisen</Title>
    </Divider>
    <Form {...layout} form={form} name="trip-search" onFinish={onFinish}>
      <Form.Item name="search" label="Suchbegriff/Stichwort">
        <Input size="large" value=''/>
      </Form.Item>
      <Form.Item name="country" label="Reiseziel">

        <Select
          mode="multiple"
          size="large"
          allowClear
          placeholder="Wählen Sie ein Land oder einen Ort aus"
        >
          <Option value="107">Deutschland</Option>
          <Option value="136">Italien</Option>
          <Option value="109">Schweiz</Option>
        </Select>

      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Suchen
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Löschen
          </Button>
        </Space>
      </Form.Item>
    </Form>
    {trips.length !== 0 && <TripPagination hide={false}
                                           searchValues={searchValues}
                                           currentPageNumber={currentPageNumber}
                                           totalCount={totalCount}/>}
    {isFetching && <div><Preloader />
      <TripsSkeleton/>
    </div>}
    <Trips trips={trips}/>
    <TripPagination hide={true}
                    searchValues={searchValues}
                    currentPageNumber={currentPageNumber}
                    totalCount={totalCount}/>
  </section>

}

const TripsSkeleton = () => {
  return <div className='trips__skeleton-wrapper'>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
  </div>
}


export default TripsPage