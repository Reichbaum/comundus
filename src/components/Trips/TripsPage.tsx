import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {
  getCurrentPage,
  getDestinations,
  getIsFetching,
  getPerPage,
  getTotalCount,
  getTrips
} from '../../redux/selectors'
import {Trips} from './Trips'
import {Button, Divider, Form, Input, Select, Skeleton, Space} from 'antd'
import Title from 'antd/es/typography/Title'
import {actions, DestinationType, requestDestinations, requestTrips} from '../../redux/tripsReducer'
import Preloader from '../Preloader/Preloader'
import TripPagination from './TripPagination'

const {Option, OptGroup} = Select

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 18}
}

const tailLayout = {
  wrapperCol: {offset: 6, span: 18}
}

const tripSearchValues = {
  search: '',
  destinations: [] as Array<number>
}

export type tripSearchValuesType = typeof tripSearchValues

const TripsPage = () => {

  const isFetching = useSelector(getIsFetching)
  let currentPageNumber = useSelector(getCurrentPage)
  const perPage = useSelector(getPerPage)
  const trips = useSelector(getTrips)
  let destinations = useSelector(getDestinations)
  const totalCount = useSelector(getTotalCount)
  const dispatch = useDispatch()
  let [searchValues, setSearchValues] = useState(tripSearchValues)

  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(requestTrips(currentPageNumber, perPage, searchValues))
    dispatch(requestDestinations())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValues, currentPageNumber, perPage])

  const onFinish = (values: tripSearchValuesType) => {
    if (searchValues.destinations.length !== 0 && searchValues.destinations !== values.destinations) {
      currentPageNumber = 1
      dispatch(actions.setCurrentPage(currentPageNumber))
    }
    const result = {
      search: values.search,
      destinations: values.destinations ? values.destinations : []
    }
    setSearchValues({...result})
  }

  const onReset = () => {
    form.resetFields()
  }

  const arrayMainDestinations = [
    {id: 107, name: 'Deutschland'},
    {id: 136, name: 'Italien'},
    {id: 109, name: 'Schweiz'},
    {id: 11, name: 'Europa'}
  ]

  const filteredDestinations = destinations.filter(({id: id1}) => !arrayMainDestinations.some(({id: id2}) => id2 === id1))

  const mainDestinations = arrayMainDestinations.map((element: DestinationType) => (
      <Option key={element.id} value={element.id}>{element.name}</Option>
    )
  )

  const optionsDestinations = filteredDestinations.map((element: DestinationType) => (
      element.count !== 0 && <Option key={element.id} value={element.id}>{element.name}</Option>
    )
  )

  return <section className='app__content container'>
    <Divider orientation="left">
      <Title level={1}>Unsere Reisen</Title>
    </Divider>
    <Form {...layout} form={form} name="trip-search" onFinish={onFinish}>
      <Form.Item name="search" label="Suchbegriff/Stichwort">
        <Input
          size="large"
          disabled={isFetching}
          value=''
          placeholder='Geben Sie eine Suchanfrage ein'
        />
      </Form.Item>
      <Form.Item name="destinations" label="Reiseziel">

        <Select
          mode="multiple"
          size="large"
          allowClear
          placeholder="Wählen Sie ein Land oder einen Ort aus"
          disabled={isFetching}
        >
          <OptGroup label="Wichtigste Länder">
            {mainDestinations}
          </OptGroup>

          {optionsDestinations}
        </Select>

      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit" disabled={isFetching}>
            Suchen
          </Button>
          <Button htmlType="button" onClick={onReset} disabled={isFetching}>
            Löschen
          </Button>
        </Space>
      </Form.Item>
    </Form>
    {trips.length !== 0 && <TripPagination hide={false}
                                           searchValues={searchValues}
                                           currentPageNumber={currentPageNumber}
                                           totalCount={totalCount}/>}
    {isFetching && <div><Preloader/>
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