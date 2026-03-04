import app from './app.js';
import { config } from './config/config.js';

app.listen(config.PORT, () => {
  console.log(`server is running on port ${config.PORT}`);
});
