
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

export default function History() {
  return (
    <div>History</div>
  )
}
