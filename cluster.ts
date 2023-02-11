import http from 'http';
import cluster from 'cluster';

if (cluster.isPrimary) {
  console.log(`master`)
}