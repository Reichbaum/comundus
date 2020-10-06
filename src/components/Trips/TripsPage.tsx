import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getCurrentPage, getIsFetching, getPerPage, getTotalCount, getTrips} from '../../redux/selectors'
import {Trips} from './Trips'
import {Divider, Pagination, Spin} from 'antd'
import Title from 'antd/es/typography/Title'
import {requestTrips } from '../../redux/tripsReducer'

export const TripsPage = () => {

  const isFetching = useSelector(getIsFetching)
  const currentPageNumber = useSelector(getCurrentPage)
  const totalCount = useSelector(getTotalCount)
  const perPage = useSelector(getPerPage)
  const trips = useSelector(getTrips)
  const dispatch = useDispatch()

  useEffect(() => {
    let actualPage = currentPageNumber
    if (trips.length === 0) {
      dispatch(requestTrips(actualPage, perPage))
    }
  }, [])

  function onShowSizeChange(currentPageNumber: number, perPage: number) {
    dispatch(requestTrips(currentPageNumber, perPage))
  }

  function onPageChange(numberPage: number) {
    dispatch(requestTrips(numberPage, perPage))
  }

  return <section>
    <Divider orientation="left">
      <Title level={2}>Unsere Reisen</Title>
    </Divider>
    {isFetching && <Spin />}
    <Pagination
      onShowSizeChange={onShowSizeChange}
      onChange={onPageChange}
      total={totalCount}
      showTotal={(total, range) => `${range[0]}-${range[1]} von ${total} Elemente`}
      defaultPageSize={perPage}
      defaultCurrent={currentPageNumber}
      pageSizeOptions={["12", "24", "36"]}
    />
    <Trips trips={trips}/>
  </section>

}
