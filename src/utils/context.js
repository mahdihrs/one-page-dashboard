import * as React from 'react';

const DashboardContext = React.createContext();

export const FIRST_DATA_FETCHED = 'set_first_time_data_fetched';

function dashboardReducer(state, action) {
  switch (action.type) {
    case FIRST_DATA_FETCHED:
      return {
        ...state,
        users: action.users,
        orders: action.orders
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function DashboardProvider(props) {
  const [state, dispatch] = React.useReducer(dashboardReducer, {
    conversion: null,
    users: null,
    revenue: null,
    orders: null
  })

  const value = [state, dispatch];
  return <DashboardContext.Provider value={value} {...props} />;
}

export function useDashboard() {
    const context = React.useContext(DashboardContext);
    if (context === undefined) {
      throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
}
