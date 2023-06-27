import Container from './components/container/container'
import Subheader from './components/subheader/subheader'
import BankAccountCard from './components/bank-account-card/bank-account-card'
import Stack from './components/stack/stack'
import PayeesCard from './components/payees-card/payees-card'
import ReminderCard from './components/reminder-card/reminder-card'
import Watchlist from './components/watchlist/watchlist'
import DashCard from './components/dash-card/dash-card'
import LoadingSpinner from './components/loading-spinner/loading-spinner'

export default function Home() {
  return (
        <>
          <Subheader />
          <Container className="bg-gray-100">
            <div className='grid  md:grid-cols-2 gap-2'>
              <BankAccountCard />
              <Stack>
                <PayeesCard />
                <ReminderCard />
              </Stack>
              <Watchlist />
            </div>
          </Container>
        </>
  )
}
