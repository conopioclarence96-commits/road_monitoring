# Admin Database Setup

## Database Files Created

1. **database.sql** - Complete database schema with tables for:
   - Admin users management
   - Road incidents tracking
   - Traffic monitoring data
   - System logs
   - Road infrastructure management

2. **db_config.php** - Database connection class with:
   - Secure MySQL connection
   - Error handling
   - Prepared statement support
   - UTF-8MB4 charset support

## Tables Overview

### admin_users
- User authentication and authorization
- Role-based access control (super_admin, admin, moderator)
- Activity tracking

### road_incidents
- Incident reporting and management
- Geographic location tracking
- Status monitoring (active, resolved, investigating)

### traffic_data
- Real-time traffic monitoring
- Vehicle count and speed tracking
- Congestion level analysis

### system_logs
- Admin activity logging
- Security audit trail
- Change tracking

### road_infrastructure
- Road asset management
- Maintenance scheduling
- Condition monitoring

## Installation

1. Import the database schema:
   ```sql
   mysql -u root -p < database.sql
   ```

2. Configure database connection in `db_config.php` if needed:
   - Default: localhost, root user, no password
   - Database name: road_monitoring

3. Default admin credentials:
   - Username: admin
   - Password: admin123
   - Email: admin@roadmonitoring.com

## Security Notes

- Change default admin password after first login
- Use prepared statements to prevent SQL injection
- Implement session management for admin authentication
- Consider adding IP whitelisting for admin access
