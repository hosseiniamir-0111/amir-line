import { createClient } from '@supabase/supabase-js'

// اینا رو از داشبورد Supabase → Project Settings → API بردار
const supabaseUrl = "https://engzmpevxrihutenblxb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZ3ptcGV2eHJpaHV0ZW5ibHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NjU3OTEsImV4cCI6MjA3MzQ0MTc5MX0.c-NpqRXOMPWYax-EYvOU28qW8UbcIPlHg33UW0AT3As"

export const supabase = createClient(supabaseUrl, supabaseKey)