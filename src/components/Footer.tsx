import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
        <footer>
                {/* Footer Section */}
                <MDBFooter bgColor="white" className="text-center text-lg-left">
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <h3>Smart City UI</h3>
                    </div>
                </MDBFooter>
            </footer>
    </div>
  )
}

export default Footer
