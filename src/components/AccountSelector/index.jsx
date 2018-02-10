import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class AccountSelector extends React.PureComponent {
  getAccountType(account) {
    return account.type.includes('prepaid') ? 'Pre-paid' : 'Current Account';
  }

  render() {
    const { currentAccountId, accounts, setCurrentAccountId } = this.props;

    return (
      <div>
        <div className="mzw-account-selector__label">Account</div>
        {accounts.length === 0 ? (
          <button className="mzw-button">Loading...</button>
        ) : (
          accounts.map(account => (
            <button
              className={`
                mzw-button
                mzw-account-selector__button
                ${currentAccountId === account.id ? 'mzw-account-selector__button--selected' : ''}
              `}
              key={account.id}
              onClick={() => setCurrentAccountId(account.id)}
            >
              {this.getAccountType(account)}
            </button>
          ))
        )}
      </div>
    );
  }
}

AccountSelector.propTypes = {
  currentAccountId: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  setCurrentAccountId: PropTypes.func.isRequired,
};

export default AccountSelector;
