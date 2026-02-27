export const SCHEMA_DATA = {
  "call_data.agents": {
    "schema": "call_data",
    "name": "agents",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": true,
        "nullable": false,
        "default": "gen_random_uuid()",
        "comment": "Primary key. Auto-generated UUID."
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Agent display name. For human agents this is their full name (e.g., Rowealth Maniago). For AI systems this is Bland AI. Unique per source_system."
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The platform this agent belongs to: bland, dialpad, or goto. An agent may appear in multiple source systems if they used both GoTo and Dialpad."
      }
    ]
  },
  "call_data.bland_backtest_results": {
    "schema": "call_data",
    "name": "bland_backtest_results",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('call_data.bland_backtest_results_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "source_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_call_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "backtest_run_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pathway_version",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'v3.0'::text",
        "comment": null
      },
      {
        "name": "verdict",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "failure_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reasoning",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "knowledge_gap",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "suggested_fix",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "affected_node",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "call_data.bland_backtest_runs": {
    "schema": "call_data",
    "name": "bland_backtest_runs",
    "columns": [
      {
        "name": "run_id",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "run_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "pathway_version",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'v3.0'::text",
        "comment": null
      },
      {
        "name": "total_calls",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "resolved_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "partial_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "transfer_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "started_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "completed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.bland_prompt_suggestions": {
    "schema": "call_data",
    "name": "bland_prompt_suggestions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('call_data.bland_prompt_suggestions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "affected_node",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "change_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "current_text",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "suggested_text",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "supporting_call_ids",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": "'{}'::text[]",
        "comment": null
      },
      {
        "name": "occurrence_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "1",
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending_review'::text",
        "comment": null
      },
      {
        "name": "reviewer_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reviewed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "call_data.bland_prompt_versions": {
    "schema": "call_data",
    "name": "bland_prompt_versions",
    "columns": [
      {
        "name": "version",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "system_prompt",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "pathway_json",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_active",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.bland_transfers": {
    "schema": "call_data",
    "name": "bland_transfers",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": true,
        "nullable": false,
        "default": "gen_random_uuid()",
        "comment": null
      },
      {
        "name": "bland_call_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transfer_node",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "location_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_on_maintenance",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_make",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_model",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "claimed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "claimed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transferred_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "call_data.calls": {
    "schema": "call_data",
    "name": "calls",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": true,
        "nullable": false,
        "default": "gen_random_uuid()",
        "comment": "Primary key. Auto-generated UUID for each call record in the unified schema."
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "The telephony platform that originated this call. Values: bland (AI auto-attendant for applicant fingerprinting calls), dialpad (agent desk phones for Support/Sales/Accounting), goto (legacy call center queues \u00e2\u0080\u0094 decommissioned 2026-02-06)."
      },
      {
        "name": "source_call_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "The original unique identifier from the source platform. For bland: UUID call_id. For dialpad: bigint call_id cast to text. For goto: UUID leg_id. Use with source_system to trace back to raw data."
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "When the call started, stored in UTC (timestamptz). Normalized from: bland created_at, dialpad date_started, goto start_time_utc."
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Call direction. Values: inbound, outbound. Normalized to lowercase. Bland calls are all inbound. Dialpad and GoTo have both."
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Phone number of the external party (customer, applicant, etc). Normalized from: bland from_number, dialpad contact_phone, goto caller_number."
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Name of the external party if available. From dialpad contact_name or goto caller_name. Bland calls do not have caller names. May contain caller ID artifacts like WIRELESS CALLER or phone-formatted names."
      },
      {
        "name": "agent_id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Foreign key to call_data.agents. The agent or system that handled the call. NULL if no agent handled it (e.g., abandoned calls)."
      },
      {
        "name": "queue_id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Foreign key to call_data.queues. The call queue the call entered. Only populated for GoTo calls (B4ALL Support Queue, Sales Call Queue, Operator, 24/7 Support Queue). NULL for Bland and Dialpad."
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Total call duration in whole seconds. Normalized from: bland corrected_duration (float8 seconds, rounded), dialpad duration_ms (divided by 1000), goto call_duration_seconds (int4). NULL if unknown."
      },
      {
        "name": "talk_duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Duration of actual conversation in seconds, excluding ring/hold/queue time. Primarily available from GoTo (talk_duration_seconds) and Bland (corrected_duration). NULL for Dialpad."
      },
      {
        "name": "wait_time_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Time the caller spent waiting in queue before being connected. Only available from GoTo calls. NULL for Bland and Dialpad."
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Final disposition of the call. GoTo values: handled, abandoned, evicted system, evicted user, evicted customer. Bland values: transferred_to_support, ai_resolved, ai_deflected, ai_abandoned. Dialpad values: Resolved, Information Provided, Partially Resolved, Callback Scheduled, etc."
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The client_id this call was matched to from the client registry. NULL if unmatched. Special value B4ALL_INTERNAL for internal calls. Used for client-level call volume analysis."
      },
      {
        "name": "match_confidence",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Confidence level of the client match. Values: high, medium, low. NULL if unmatched."
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Classification of the call. Values: customer_matched, internal, applicant_direct, unmatchable_no_signal, unmatched_with_signal, unmatched_low_signal, abandoned_no_signal. NULL if not yet classified."
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "AI-generated or human-written summary of the call content. Available from Bland (AI summary) and Dialpad (AI recap). NULL for GoTo."
      },
      {
        "name": "primary_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The primary topic or reason for the call. Available from Dialpad AI enrichment. NULL for Bland and GoTo."
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Caller sentiment analysis. Available from Dialpad and GoTo (ai_sentiment). NULL for Bland."
      },
      {
        "name": "match_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Method used to match the call to a client. Examples: phone_match, name_exact, name_fuzzy, dialpad_crossmatch, internal_classification. NULL if unmatched."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this record was inserted into the call_data schema. Defaults to now()."
      }
    ]
  },
  "call_data.calls_raw_bland": {
    "schema": "call_data",
    "name": "calls_raw_bland",
    "columns": [
      {
        "name": "call_id",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Bland API call UUID. Primary key. Matches call_data.calls.source_call_id for source_system=bland."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "started_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "end_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_length",
        "type": "float8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "corrected_duration",
        "type": "float8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Corrected call duration in seconds (float). More accurate than call_length."
      },
      {
        "name": "from_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "to_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "queue_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "completed",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "answered_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_ended_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "inbound",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "error_message",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transferred_to",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Phone number the call was transferred to (if applicable). Indicates Bland could not resolve the call."
      },
      {
        "name": "transferred_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_warm_transfer",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "concatenated_transcript",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Plain text concatenation of the full transcript. Useful for full-text search."
      },
      {
        "name": "transcripts",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Full structured transcript as JSONB array. Each element has user (speaker role) and text fields."
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "analysis",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Bland AI structured analysis output (JSONB). Contains AI-generated insights about the call."
      },
      {
        "name": "variables",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Bland pathway variables captured during the call (JSONB). Contains extracted data like caller intent, appointment details, etc."
      },
      {
        "name": "metadata",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Bland API metadata (JSONB). Contains pathway ID, campaign info, and other system metadata."
      },
      {
        "name": "batch_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "campaign_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "price",
        "type": "float8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Cost of the Bland AI call in USD."
      },
      {
        "name": "recording_url",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "URL to the call recording audio file on Bland servers."
      },
      {
        "name": "synced_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "call_data.calls_raw_dialpad": {
    "schema": "call_data",
    "name": "calls_raw_dialpad",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "call_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Dialpad API call ID (bigint). Matches call_data.calls.source_call_id (as text) for source_system=dialpad."
      },
      {
        "name": "master_call_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "entry_point_call_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "date_started",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "date_connected",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "date_ended",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "date_rang",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_ms",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_duration_ms",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "group_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "internal_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "external_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_transferred",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "was_recorded",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transcript",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ai_recap",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_dispositions",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "primary_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "knowledge_gap_detected",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Whether Dialpad AI detected a knowledge gap during the call."
      },
      {
        "name": "gap_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Description of the knowledge gap if detected."
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_confidence",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "enriched_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "operator_call_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recap_outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recap_purposes",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "AI-detected purposes of the call (text array). E.g., scheduling, billing inquiry."
      },
      {
        "name": "recap_action_items",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "AI-detected action items from the call (text array)."
      },
      {
        "name": "recording_url",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "URL to the call recording on Dialpad servers."
      },
      {
        "name": "recording_details",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Full recording metadata from Dialpad (JSONB)."
      },
      {
        "name": "voicemail_link",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "URL to voicemail recording if caller left a message."
      },
      {
        "name": "csat_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Customer satisfaction score (1-5) from post-call survey."
      },
      {
        "name": "pcsat_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Predicted CSAT score from Dialpad AI."
      },
      {
        "name": "mos_score",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Mean Opinion Score \u00e2\u0080\u0094 voice quality metric (1.0-5.0)."
      },
      {
        "name": "labels",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "User-applied labels/tags on the call (text array)."
      },
      {
        "name": "entry_point_target",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Dialpad routing entry point details (JSONB). Shows how the call entered the system."
      },
      {
        "name": "call_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Current state of the call in Dialpad (e.g., completed, voicemail)."
      }
    ]
  },
  "call_data.queues": {
    "schema": "call_data",
    "name": "queues",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": true,
        "nullable": false,
        "default": "gen_random_uuid()",
        "comment": "Primary key. Auto-generated UUID."
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Queue display name. Values: B4ALL Support Queue (~24,378 calls), Sales Call Queue (~2,748 calls), Operator (~12 calls), 24/7 Support Queue (~5 calls)."
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The platform this queue belongs to. Currently only goto."
      }
    ]
  },
  "call_data.sync_metadata": {
    "schema": "call_data",
    "name": "sync_metadata",
    "columns": [
      {
        "name": "source_system",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "The telephony platform: bland, dialpad, goto. Primary key."
      },
      {
        "name": "last_synced_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Timestamp of the last successful sync. Used as the cursor for incremental pulls from the source API."
      },
      {
        "name": "last_synced_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Optional bookmark ID for cursor-based pagination (not currently used)."
      },
      {
        "name": "last_call_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Number of calls returned in the last sync batch."
      },
      {
        "name": "sync_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'healthy'::text",
        "comment": "Current sync health. Values: healthy, stale, error."
      },
      {
        "name": "notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Free-text notes about the sync state (e.g., error messages, manual overrides)."
      }
    ]
  },
  "call_data.temp_operator_lookup": {
    "schema": "call_data",
    "name": "temp_operator_lookup",
    "columns": [
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_monthly_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_on_maintenance",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.transcripts": {
    "schema": "call_data",
    "name": "transcripts",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": true,
        "nullable": false,
        "default": "gen_random_uuid()",
        "comment": "Primary key. Auto-generated UUID."
      },
      {
        "name": "call_id",
        "type": "uuid",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Foreign key to call_data.calls.id. Cascades on delete."
      },
      {
        "name": "speaker",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Who spoke this utterance. For Bland: user (caller) or assistant (AI). For Dialpad: full transcript stored as single entry (speaker may be NULL)."
      },
      {
        "name": "utterance_index",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Sequential position of this utterance within the call transcript. 0-indexed. NULL for Dialpad full-text transcripts."
      },
      {
        "name": "text",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The text content of the utterance or full transcript."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this record was inserted. Defaults to now()."
      }
    ]
  },
  "call_data.v_agent_performance": {
    "schema": "call_data",
    "name": "v_agent_performance",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "queue_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "talk_duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "wait_time_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "primary_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.v_ai_attendant": {
    "schema": "call_data",
    "name": "v_ai_attendant",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transferred_to",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_cost_usd",
        "type": "float8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recording_url",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ai_analysis",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pathway_variables",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bland_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bland_completed",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "answered_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_ended_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.v_call_volume": {
    "schema": "call_data",
    "name": "v_call_volume",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "queue_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_confidence",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.v_client_call_activity": {
    "schema": "call_data",
    "name": "v_client_call_activity",
    "columns": [
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_system",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "primary_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.v_dialpad_enriched": {
    "schema": "call_data",
    "name": "v_dialpad_enriched",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "primary_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_confidence",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "csat_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pcsat_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "mos_score",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recording_url",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "voicemail_link",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "labels",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recap_purposes",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recap_action_items",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "knowledge_gap_detected",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gap_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "call_data.v_queue_performance": {
    "schema": "call_data",
    "name": "v_queue_performance",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_timestamp",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "direction",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "queue_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "talk_duration_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "wait_time_seconds",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outcome",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "call_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.accounting_audit_log": {
    "schema": "canonical",
    "name": "accounting_audit_log",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Auto-generated primary key"
      },
      {
        "name": "action_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Normalized action type: created_table, created_view, created_function, created_object, modified_data, ran_migration, other. Check constraint enforced."
      },
      {
        "name": "object_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Name of the database object affected (table, view, function, etc.)"
      },
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of object: table, view, function, data, trigger, constraint, edge_function, multiple, view/table"
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Narrative description of what changed and why. Always populated."
      },
      {
        "name": "sql_executed",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "The actual SQL that was run. Currently unpopulated \u00e2\u0080\u0094 future sessions should fill this."
      },
      {
        "name": "changed_by",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Identifier for who made the change (e.g., claude_code, phase1_cleanup_agent, overnight_kb_vector_build)"
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Source file or document that informed the change, if applicable"
      },
      {
        "name": "validation_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Whether the change was validated after applying: validated or NULL"
      },
      {
        "name": "validation_details",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB with validation metrics (row counts, match rates, etc.)"
      },
      {
        "name": "session_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Groups related changes into logical work sessions. Convention: agent_name_YYYYMMDD or session_N_purpose"
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": "When this audit log entry was created"
      }
    ]
  },
  "canonical.ar_ledger": {
    "schema": "canonical",
    "name": "ar_ledger",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.ar_ledger_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "ThinClient client_id \u00e2\u0080\u0094 primary customer identifier across TC exports"
      },
      {
        "name": "date",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "detail",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Dollar amount. Positive = debit, context depends on detail type."
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'thinclient'::text",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.coa_master": {
    "schema": "canonical",
    "name": "coa_master",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "detail_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coa_section",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "coa_subsection",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "last_je_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_active",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "true",
        "comment": null
      },
      {
        "name": "is_dnu",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "is_clearing",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "is_balance_sheet",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "true",
        "comment": null
      },
      {
        "name": "close_step",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "close_role",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "automation_status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'not_assessed'::text",
        "comment": null
      },
      {
        "name": "automation_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "automation_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "data_feed_needed",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "unusual_balance_flag",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "unusual_balance_note",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.customer_transactions": {
    "schema": "canonical",
    "name": "customer_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.customer_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "year",
        "type": "int4",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "month",
        "type": "int4",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "secondary_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "secondary_client_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "volume",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_charges",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'thinclient'::text",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.je_tier_classification": {
    "schema": "canonical",
    "name": "je_tier_classification",
    "columns": [
      {
        "name": "je_number",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Primary key. QuickBooks JE number (e.g., JD000114, DN000810R). Natural key matching stg_qb_journal_entries."
      },
      {
        "name": "je_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Human-readable name describing what the JE does (e.g., FP Revenue breakout, Goodwill amortization)"
      },
      {
        "name": "tier",
        "type": "int4",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Automation tier 1-8. Check constraint enforced. 1=Proven, 2=Wire-data, 3=Fixed/Calculated, 4=External-feed, 5=Reversal, 6=Manual-recon, 7=(unused), 8=One-time"
      },
      {
        "name": "tier_label",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Human-readable tier label. Tier 3 intentionally splits into Fixed (constant amount) vs Calculated (computed from rates/day counts)."
      },
      {
        "name": "jan_2026_debit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Jan 2026 debit amount for reference/validation. Used for back-testing automation accuracy."
      },
      {
        "name": "automation_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "What generates this JE: function name (get_fixed_monthly_jes, calculate_interest_accrual), view name (v_ar_trueup), or category (hardcode, reversal_engine, archive, hr_data, manual_calc, etc.)"
      },
      {
        "name": "close_step",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Month-end close checklist step number (e.g., Step 18, Step 33). NULL for Tier 8 one-time JEs."
      },
      {
        "name": "is_reversing",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "True if this JE reverses a prior month entry. All reversals should have reversal_of populated."
      },
      {
        "name": "reversal_of",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JE number being reversed. References the original JE in QuickBooks (may not exist in this table since originals are classified separately)."
      },
      {
        "name": "notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Free-text notes on the JE: account mappings, special handling, reclassification history."
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Last modification timestamp. Updated by audit trigger."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "When this JE was first classified. Backfilled from updated_at for pre-existing rows."
      }
    ]
  },
  "canonical.stg_achworks_transactions": {
    "schema": "canonical",
    "name": "stg_achworks_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_achworks_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "acct_set",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "effective_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "check_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "original_payee",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "payee_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "routing_no",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_no",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "service_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "trans_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "trans_desc",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "settlement_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "date_to_settle",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "return_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "return_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "return_sid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccode",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cdate",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tracking_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_asc842_lease_schedule": {
    "schema": "canonical",
    "name": "stg_asc842_lease_schedule",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "rent_expense",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "rou_amort",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "st_liability",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "lt_liability",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_contract_pricing": {
    "schema": "canonical",
    "name": "stg_contract_pricing",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "date",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "execution_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num_trans",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "bam_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "gov_fees",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "sam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "bam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "srs_offset",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "gov_fee_per_trans",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_customer_mapping": {
    "schema": "canonical",
    "name": "stg_customer_mapping",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "qb_customer_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "qb_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parsed_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "id_type_detected",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolved_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "secondary_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "matched_from",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sales_2024",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sales_2025",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_deferred_financing_schedule": {
    "schema": "canonical",
    "name": "stg_deferred_financing_schedule",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "amort_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "daily_rate",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'Amortize Deferred Financing Costs'::text",
        "comment": null
      }
    ]
  },
  "canonical.stg_deferred_revenue_coverage": {
    "schema": "canonical",
    "name": "stg_deferred_revenue_coverage",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_deferred_revenue_coverage_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "source_sheet",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "sub_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_ref",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_months",
        "type": "int4",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_end",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_ea_reclass_monthly": {
    "schema": "canonical",
    "name": "stg_ea_reclass_monthly",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_ea_reclass_monthly_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "vendor_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "person_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bill_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "reclass_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "reclass_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_fixed_asset_register": {
    "schema": "canonical",
    "name": "stg_fixed_asset_register",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_fixed_asset_register_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "asset_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "asset_category",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "original_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "useful_life_months",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "monthly_depreciation",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "debit_account",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'81020'::text",
        "comment": null
      },
      {
        "name": "debit_account_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'81020 - Depreciation Expense'::text",
        "comment": null
      },
      {
        "name": "credit_account",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'16010'::text",
        "comment": null
      },
      {
        "name": "credit_account_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'16010 - Accum. Depreciation'::text",
        "comment": null
      },
      {
        "name": "in_service_date",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "end_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_ml_monthly_market_value": {
    "schema": "canonical",
    "name": "stg_ml_monthly_market_value",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_ml_monthly_market_value_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "statement_ending_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "unrealized_gain_loss",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "advisory_fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "interest_income",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_paypal_transactions": {
    "schema": "canonical",
    "name": "stg_paypal_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_paypal_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "txn_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_time",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "timezone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "currency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gross",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "from_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "to_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "item_title",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "quantity",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "balance_impact",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_pramod_maintenance": {
    "schema": "canonical",
    "name": "stg_pramod_maintenance",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_pramod_maintenance_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "invoice_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount_charged",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "months_of_coverage",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "monthly_fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_begin_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": "'2026-01-01'::date",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_psp_balance_totals": {
    "schema": "canonical",
    "name": "stg_psp_balance_totals",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_psp_balance_totals_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_date",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "ar_total",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "ap_total",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_account_list": {
    "schema": "canonical",
    "name": "stg_qb_account_list",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "detail_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_customer_contacts": {
    "schema": "canonical",
    "name": "stg_qb_customer_contacts",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_numbers",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bill_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ship_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_deposit_detail": {
    "schema": "canonical",
    "name": "stg_qb_deposit_detail",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "bank_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deposit_group",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "vendor",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cleared",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_expense_report": {
    "schema": "canonical",
    "name": "stg_qb_expense_report",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "vendor",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "due_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_invoice_list": {
    "schema": "canonical",
    "name": "stg_qb_invoice_list",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "due_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_invoices_received_payments": {
    "schema": "canonical",
    "name": "stg_qb_invoices_received_payments",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_group",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "payment_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_journal_entries": {
    "schema": "canonical",
    "name": "stg_qb_journal_entries",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reversed",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "adjusting_journal",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_on",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "modified_on",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_journal_entry_lines": {
    "schema": "canonical",
    "name": "stg_qb_journal_entry_lines",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "je_group_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "debit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_pnl": {
    "schema": "canonical",
    "name": "stg_qb_pnl",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "period",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "period_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_sales": {
    "schema": "canonical",
    "name": "stg_qb_sales",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "product_service",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "distribution_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Dollar amount. Sign convention varies by transaction_type."
      }
    ]
  },
  "canonical.stg_qb_unpaid_bills": {
    "schema": "canonical",
    "name": "stg_qb_unpaid_bills",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "vendor",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bill_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "due_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "past_due",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_qb_vendor_contacts": {
    "schema": "canonical",
    "name": "stg_qb_vendor_contacts",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "vendor",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_numbers",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.stg_ramp_business_transactions": {
    "schema": "canonical",
    "name": "stg_ramp_business_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_ramp_business_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "txn_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "detailed_transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_ramp_cc_transactions": {
    "schema": "canonical",
    "name": "stg_ramp_cc_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_ramp_cc_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "transaction_time",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "clearing_time",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "clearing_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "outstanding_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "currency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "card_user",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "merchant_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "merchant_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "merchant_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "merchant_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "merchant_country",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ramp_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ramp_department",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ramp_location",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "card_last_4",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "card_present",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "external_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "header_memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ramp_entity",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cashback_earned",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "accounting_category_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "accounting_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_recurring_je_lines": {
    "schema": "canonical",
    "name": "stg_recurring_je_lines",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_recurring_je_lines_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "je_template",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "line_description",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_code",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "effective_from",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "effective_to",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "close_step",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_auto_billing": {
    "schema": "canonical",
    "name": "stg_sk_auto_billing",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_auto_billing_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "ThinClient client_id \u00e2\u0080\u0094 joins to ar_ledger.client_id, customer_transactions.client_id"
      },
      {
        "name": "invoice_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_num",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credit_debit",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Amount in PENNIES (not dollars). Divide by 100 for dollar value."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_contract_transactions": {
    "schema": "canonical",
    "name": "stg_sk_contract_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_contract_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'FP'::text",
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "ThinClient contract code \u00e2\u0080\u0094 joins to stg_contract_pricing.contract_code"
      },
      {
        "name": "execution_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_dollars",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_invoice_summary": {
    "schema": "canonical",
    "name": "stg_sk_invoice_summary",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_invoice_summary_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'FP'::text",
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_amount_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "discount_amount_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoiced_amount_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "paid_amount_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_not_processed": {
    "schema": "canonical",
    "name": "stg_sk_not_processed",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_not_processed_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'FP'::text",
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_dollars",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Fee in DOLLARS (unlike auto_billing which is pennies)"
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_outstanding_invoices": {
    "schema": "canonical",
    "name": "stg_sk_outstanding_invoices",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_outstanding_invoices_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_num",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_balance_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount_dollars",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_sk_peer_service_fees": {
    "schema": "canonical",
    "name": "stg_sk_peer_service_fees",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_sk_peer_service_fees_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'FP'::text",
        "comment": null
      },
      {
        "name": "invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "PSP fee in PENNIES per transaction tier"
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_swipesum_monthly_fees": {
    "schema": "canonical",
    "name": "stg_swipesum_monthly_fees",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_swipesum_monthly_fees_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "report_date",
        "type": "date",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_file",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "canonical.stg_swipesum_transactions": {
    "schema": "canonical",
    "name": "stg_swipesum_transactions",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.stg_swipesum_transactions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "swipesum_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reference_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "payment_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_expiration",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "orderid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_time",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "response",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "responsetext",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "auth_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "batch_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "zip_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ponumber",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tax",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "entry_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "orderdescription",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "canonical.thinclient_blsid_detail": {
    "schema": "canonical",
    "name": "thinclient_blsid_detail",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('canonical.thinclient_blsid_detail_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "location_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "upgrader_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_rating",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "operation_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "card_scan_configuration",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_on_maintenance",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tot_association",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "address_2",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "county",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "zip_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "country",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "store_hours",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "website",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "latitude",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "longitude",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "time_zone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "appointment_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "appointment_not_allowed",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "appointment_required",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_make",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_model",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_serial",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "system_os",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "system_ram",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "system_serial",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "system_primary_free_space",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "system_secondary_free_space",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dot_net_framework_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sql_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "environmental_info_last_retrieved",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "remark",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "public_remark",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fees",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_title_or_department",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_home_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_mobile_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_email_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_address_2",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_county",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_contact_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_creation_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_suspension_summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_full_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "shipping_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_remark",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_website",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "end_of_week_for_weekly_reports",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "weekly_report_format",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_title_or_department",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_home_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_mobile_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_email_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_address_2",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_county",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_contact_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_site_association",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cbid_association",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_association",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_ownership",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ori_ownership",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "oca_ownership",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_client",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_ownerships",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "import_type_association",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ip_address_whitelist",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_creation_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_psp_net_balance",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_psp_account_balance",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maintenance_net_balance",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_calculation_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_device_configuration",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_discount_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_based_min_transaction_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_based_max_transaction_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_based_min_monthly_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_based_max_monthly_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_monthly_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_discount_percentage",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_period_months",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_period_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_net_term_days",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_grace_days_to_disable",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_months_of_coverage",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_ach_discount_percentage",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_billing_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_primary_payment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_maint_backup_payment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_shipping_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_contact_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "invoice_billing_zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "po_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_balance_threshold",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_term_days",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "grace_days_to_suspend_blsid",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ach_discount_percentage",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_po_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "send_maintenance_invoice_one_month_early",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_relay_configuration",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_contract_configuration",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psp_primary_payment_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psp_backup_payment_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'thinclient'::text",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "finance.cache_je_comparison": {
    "schema": "finance",
    "name": "cache_je_comparison",
    "columns": [
      {
        "name": "p_year",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "p_month",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "je_number",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "je_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tier",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gen_total_dr",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gen_total_cr",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "act_total_dr",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "act_total_cr",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dr_diff",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cr_diff",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gen_balanced",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cached_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "finance.cache_je_detail": {
    "schema": "finance",
    "name": "cache_je_detail",
    "columns": [
      {
        "name": "p_year",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "p_month",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "je_number",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "je_description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tier",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "line_num",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "account_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "debit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cached_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "finance.cache_je_summary": {
    "schema": "finance",
    "name": "cache_je_summary",
    "columns": [
      {
        "name": "p_year",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "p_month",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "section",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "metric",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "value",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cached_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "finance.cache_pr_report": {
    "schema": "finance",
    "name": "cache_pr_report",
    "columns": [
      {
        "name": "p_year",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "p_month",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "section",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "line_item",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gross_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fees",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cached_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "finance.v_ar_aging_analysis": {
    "schema": "finance",
    "name": "v_ar_aging_analysis",
    "columns": [
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_invoices",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_outstanding",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "current_0_30",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "aging_31_60",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "aging_61_90",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "aging_91_120",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "aging_120_plus",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "oldest_invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "newest_invoice_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "max_days_outstanding",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_ar_ap_reconciliation": {
    "schema": "finance",
    "name": "v_ar_ap_reconciliation",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tc_monthly_ar",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ar_client_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ar_je_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ar_trueup_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "implied_pre_adj_ar",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "st_je_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "server_tracked_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tc_monthly_ap",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ap_client_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ap_je_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ap_trueup_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_ar_trueup": {
    "schema": "finance",
    "name": "v_ar_trueup",
    "columns": [
      {
        "name": "tc_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tc_ar_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tc_ap_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tc_net",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "qbo_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "qbo_ar_balance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "variance",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "note",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_client_ar_waterfall": {
    "schema": "finance",
    "name": "v_client_ar_waterfall",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psf_gross",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psf_net",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psf_discount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credits_applied_trans",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credits_applied_maint",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_net_unapplied",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_charges",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_credits",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maint_payment",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_payment",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ach_payout",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "monthly_ar",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "monthly_ap",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_tier_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_tiers_pennies",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ar_only",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "psf_only",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_discount",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_client_coverage_months": {
    "schema": "finance",
    "name": "v_client_coverage_months",
    "columns": [
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_months",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "calc_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_close_progress": {
    "schema": "finance",
    "name": "v_close_progress",
    "columns": [
      {
        "name": "close_step",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_debits",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_credits",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_deferred_revenue_balance": {
    "schema": "finance",
    "name": "v_deferred_revenue_balance",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sub_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billed",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recognized",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_deferral_change",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_deferred_revenue_billing": {
    "schema": "finance",
    "name": "v_deferred_revenue_billing",
    "columns": [
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sub_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reference_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "product_service",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_months",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_deferred_revenue_schedule": {
    "schema": "finance",
    "name": "v_deferred_revenue_schedule",
    "columns": [
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sub_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reference_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "product_service",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_months",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "coverage_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recognition_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "recognized_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "month_offset",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_je_lines_mapped": {
    "schema": "finance",
    "name": "v_je_lines_mapped",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_group_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "period_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "period",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "memo",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "account_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "debit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "net_amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pnl_section",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_qb_solutions_proof": {
    "schema": "finance",
    "name": "v_qb_solutions_proof",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_43010_hardware",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_43040_software",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_43090_finance_charges",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_43050_sw_disc",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_43020_hw_disc",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_53010_hardware_cogs",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_qb_support_fees_proof": {
    "schema": "finance",
    "name": "v_qb_support_fees_proof",
    "columns": [
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_44010_invoiced_qb",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_44030_autopay",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_44050_sam_credit",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_44030",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_sales_pnl_rollup": {
    "schema": "finance",
    "name": "v_sales_pnl_rollup",
    "columns": [
      {
        "name": "period_start",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "period",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pnl_section",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "distribution_account",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "txn_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_sk_cogs_classification": {
    "schema": "finance",
    "name": "v_sk_cogs_classification",
    "columns": [
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "execution_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_dollars",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cogs_bucket",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gov_fees",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "srs_offset",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_sk_fee_classification": {
    "schema": "finance",
    "name": "v_sk_fee_classification",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contract_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "execution_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "fee_pennies",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "agency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_dollars",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "je_bucket",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gov_fees",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "srs_offset",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_sk_not_processed_monthly": {
    "schema": "finance",
    "name": "v_sk_not_processed_monthly",
    "columns": [
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "line_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transaction_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_adjustment",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "distinct_contracts",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "distinct_statuses",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "statuses",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_sk_revenue_cogs_monthly": {
    "schema": "finance",
    "name": "v_sk_revenue_cogs_monthly",
    "columns": [
      {
        "name": "report_month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_region",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "processing_fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gov_fees_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_cost_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_fp_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sam_cost_cogs",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bam_cost",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "gov_fees_cogs_before_adj",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "srs_offset",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "not_processed_total_fee",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cancellation_fees",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_rows",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "informational_rows",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "finance.v_tc_monthly_balances": {
    "schema": "finance",
    "name": "v_tc_monthly_balances",
    "columns": [
      {
        "name": "period_end",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "month",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "balance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "kb.kb_articles": {
    "schema": "kb",
    "name": "kb_articles",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Primary key. Auto-generated bigint."
      },
      {
        "name": "source_path",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Relative path in GitHub repo (e.g. procedures/accounting/monthly-close.md). Part of unique constraint with chunk_index."
      },
      {
        "name": "github_sha",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Git commit SHA when this article was last synced from GitHub."
      },
      {
        "name": "title",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Article title extracted from markdown H1 or frontmatter."
      },
      {
        "name": "content",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Full markdown content of the article (or chunk if chunked)."
      },
      {
        "name": "content_tokens",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Approximate token count of content field. Used for chunking decisions and cost estimation."
      },
      {
        "name": "kb_layer",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Which KB layer this article belongs to. Must be one of: context, procedure, reference, system-config. Maps to repo top-level directories."
      },
      {
        "name": "section",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Second-level directory within the layer (e.g. accounting, sales, support). NULL for top-level articles like context/ overviews."
      },
      {
        "name": "parent_path",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Planned: source_path of parent article for hierarchical relationships. Not yet populated."
      },
      {
        "name": "chunk_index",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": "Zero-based chunk index. Currently all articles are chunk 0 (no chunking). Part of unique constraint with source_path."
      },
      {
        "name": "audience",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Text array of intended audiences (e.g. {agent,human,both}). Used for filtering search results by consumer type."
      },
      {
        "name": "departments",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Text array of relevant departments (e.g. {accounting,support}). GIN-indexed for array containment queries."
      },
      {
        "name": "customer_segments",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Text array of applicable customer segments (e.g. {SAM,SaaS}). NULL when article is segment-agnostic. GIN-indexed."
      },
      {
        "name": "systems",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Text array of source systems referenced (e.g. {hubspot,quickbooks}). NULL when not system-specific. GIN-indexed."
      },
      {
        "name": "topic_tags",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Planned: text array of topic tags for faceted search. Not yet populated. GIN-indexed."
      },
      {
        "name": "trigger_phrases",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Planned: text array of phrases that should trigger retrieval of this article. Not yet populated. GIN-indexed."
      },
      {
        "name": "requires_approval",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether actions described in this article require human approval before execution. Defaults to false."
      },
      {
        "name": "has_financial_impact",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether this article describes processes with financial impact (e.g. journal entries, billing). Defaults to false."
      },
      {
        "name": "is_government",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether this article pertains to government/LE customer processes. Defaults to false."
      },
      {
        "name": "confidence_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Free-text notes about confidence level or caveats for this article content. NULL for most articles."
      },
      {
        "name": "last_backtested",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Planned: timestamp of last backtesting run against real-world scenarios. Not yet implemented."
      },
      {
        "name": "embedding",
        "type": "vector",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "vector(1536) column for semantic search. IVFFlat-indexed with cosine similarity. Not yet populated \u00e2\u0080\u0094 awaiting embedding model selection."
      },
      {
        "name": "synced_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this article was last synced from GitHub. Defaults to now()."
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp of last modification to this row. Defaults to now()."
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'active'::text",
        "comment": "Article lifecycle status. Must be one of: active, deprecated, needs_review. All current articles are active."
      },
      {
        "name": "content_tsv",
        "type": "tsvector",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "tsvector column for full-text search. GIN-indexed. Populated by kb-loader edge function during sync."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this article was first loaded. Backfilled from synced_at for initial load. Defaults to now()."
      }
    ]
  },
  "kb.kb_proposed_updates": {
    "schema": "kb",
    "name": "kb_proposed_updates",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Primary key. Auto-generated bigint."
      },
      {
        "name": "target_article_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "FK to kb_articles.id. The article this proposal targets. NULL for new_article proposals."
      },
      {
        "name": "target_source_path",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Source path of the target article. Allows proposals to reference articles by path even if article_id is unknown."
      },
      {
        "name": "proposal_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of proposed change. Must be one of: new_article, update_existing, deprecate, flag_gap."
      },
      {
        "name": "proposed_title",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Proposed new title for the article. NULL if title is unchanged."
      },
      {
        "name": "proposed_content",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Proposed new markdown content. NULL for deprecate/flag_gap proposals."
      },
      {
        "name": "proposed_metadata",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB of proposed metadata changes (audience, departments, tags, etc.). Partial updates \u00e2\u0080\u0094 only changed fields included."
      },
      {
        "name": "rationale",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Human-readable explanation of why this change is proposed."
      },
      {
        "name": "evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB of supporting evidence (e.g. ticket IDs, customer feedback, data discrepancies found by agents)."
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending_review'::text",
        "comment": "Review lifecycle status. Must be one of: pending_review, approved, rejected, applied. Defaults to pending_review."
      },
      {
        "name": "reviewed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Identifier of the reviewer (human name or agent ID) who approved/rejected."
      },
      {
        "name": "reviewed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Timestamp when the proposal was reviewed (approved or rejected)."
      },
      {
        "name": "review_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Free-text notes from the reviewer explaining their decision."
      },
      {
        "name": "proposed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'system'::text",
        "comment": "Identifier of who created the proposal. Defaults to system. Could be agent ID or human name."
      },
      {
        "name": "source_pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Name of the pipeline or process that generated this proposal (e.g. ticket_analysis, monthly_review)."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this proposal was created. Defaults to now()."
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp of last modification. Auto-updated by meta.fn_set_updated_at() trigger on UPDATE."
      }
    ]
  },
  "kb.kb_remediation": {
    "schema": "kb",
    "name": "kb_remediation",
    "columns": [
      {
        "name": "id",
        "type": "int4",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('kb.kb_remediation_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "audit_function",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "article_path",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "severity",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "title",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "fix_instructions",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "content_before",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "content_after",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "requires_approval",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "true",
        "comment": null
      },
      {
        "name": "approval_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "approval_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "blocked_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "applied_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "applied_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "kb.kb_sync_log": {
    "schema": "kb",
    "name": "kb_sync_log",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Primary key. Auto-generated bigint."
      },
      {
        "name": "operation",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of sync operation. Must be one of: insert, update, delete, bulk_load. Check-constrained."
      },
      {
        "name": "article_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "FK to kb_articles.id. NULL for bulk_load operations which log at batch level rather than per-article."
      },
      {
        "name": "source_path",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Source path of the affected article. Always populated even when article_id is NULL (bulk_load stores batch identifier here)."
      },
      {
        "name": "details",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB payload with operation-specific details (e.g. fields changed, token counts, error messages)."
      },
      {
        "name": "performed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'system'::text",
        "comment": "Identifier of who performed the operation (e.g. kb-loader-edge-function, overnight_kb_vector_build)."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Timestamp when this log entry was created. Defaults to now(). Indexed for time-range queries."
      }
    ]
  },
  "kb.v_kb_health": {
    "schema": "kb",
    "name": "v_kb_health",
    "columns": [
      {
        "name": "metric",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "value",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "kb.v_kb_overview": {
    "schema": "kb",
    "name": "v_kb_overview",
    "columns": [
      {
        "name": "kb_layer",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "section",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "article_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_tokens",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "avg_tokens",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "with_embeddings",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "financial_impact",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "government_related",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "needs_approval",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_confidence_notes",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "active",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "needs_review",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deprecated",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "kb.v_kb_pending_updates": {
    "schema": "kb",
    "name": "v_kb_pending_updates",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "proposal_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_source_path",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "proposed_title",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "content_preview",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "rationale",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "existing_title",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "existing_layer",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "kb.v_kb_sync_history": {
    "schema": "kb",
    "name": "v_kb_sync_history",
    "columns": [
      {
        "name": "sync_hour",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "operation",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "operations",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "performed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "meta.agent_log": {
    "schema": "meta",
    "name": "agent_log",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "agent_session",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "action_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "object_schema",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'public'::text",
        "comment": null
      },
      {
        "name": "object_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "sql_preview",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "logged_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "meta.column_dictionary": {
    "schema": "meta",
    "name": "column_dictionary",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "schema_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'public'::text",
        "comment": null
      },
      {
        "name": "table_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "column_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "business_meaning",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Plain-English description of what this column represents in the business context"
      },
      {
        "name": "data_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Technical notes: data type, nullability, gotchas, format examples"
      },
      {
        "name": "is_join_key",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether this column is used to join across tables"
      },
      {
        "name": "joins_to",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Comma-separated list of table.column targets this column joins to"
      },
      {
        "name": "registered_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "meta.dependency_map": {
    "schema": "meta",
    "name": "dependency_map",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of the source object: table, view, function"
      },
      {
        "name": "source_schema",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'public'::text",
        "comment": null
      },
      {
        "name": "source_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "target_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of the target object: table, view, function"
      },
      {
        "name": "target_schema",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'public'::text",
        "comment": null
      },
      {
        "name": "target_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "dependency_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Nature of the dependency: reads_from, writes_to, joins_to"
      },
      {
        "name": "notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "registered_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "meta.issues": {
    "schema": "meta",
    "name": "issues",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Auto-generated primary key"
      },
      {
        "name": "title",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Short summary of the issue (1 line)"
      },
      {
        "name": "description",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Full description with context, impact, and suggested fix"
      },
      {
        "name": "severity",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Issue severity: critical, high, medium, low, info. Check constraint enforced."
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Issue type: data_quality, cleanup, missing_fk, missing_index, documentation, rls_missing, security, performance, redundant_object, naming, optimization. Check constraint enforced."
      },
      {
        "name": "affected_schema",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Schema containing the affected object. NULL for cross-cutting issues."
      },
      {
        "name": "affected_object",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Table/view/function name affected. NULL for cross-cutting issues."
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'open'::text",
        "comment": "Issue lifecycle: open \u00e2\u0086\u0092 in_progress \u00e2\u0086\u0092 resolved/wont_fix. Check constraint enforced."
      },
      {
        "name": "resolution",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Description of how the issue was resolved. NULL while open."
      },
      {
        "name": "resolved_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Timestamp when status changed to resolved. NULL while open."
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": "When the issue was first logged"
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": "Auto-updated on every row change via trigger"
      }
    ]
  },
  "meta.object_registry": {
    "schema": "meta",
    "name": "object_registry",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Type of DB object: table, view, function, edge_function"
      },
      {
        "name": "schema_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'public'::text",
        "comment": null
      },
      {
        "name": "object_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "purpose",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Business domain: accounting_close, calls_support, staging, hubspot_crm, meta, knowledge_base, customer_data, revenue_billing, operations, temp"
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'active'::text",
        "comment": "Lifecycle status: active, deprecated, proposed"
      },
      {
        "name": "created_by",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'unknown'::text",
        "comment": null
      },
      {
        "name": "created_context",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "row_count_approx",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Approximate row count. Updated during audits. Use for query planning, not exact counts."
      },
      {
        "name": "refresh_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "How data gets into this object: manual, agent_batch, edge_function, computed"
      },
      {
        "name": "refresh_frequency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "How often data refreshes: on_change, daily, monthly, annual, as_needed"
      },
      {
        "name": "has_rls",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether Row Level Security is enabled on this object"
      },
      {
        "name": "has_comments",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "needs_cleanup",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Flag set during audits when cleanup work is needed"
      },
      {
        "name": "cleanup_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "registered_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      },
      {
        "name": "has_audit_trigger",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": "Whether this table has a trigger logging changes to data_change_log"
      },
      {
        "name": "audit_trigger_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Type of audit trigger: row_level (full change log), aggregate (batch summary), ddl_event, or none"
      },
      {
        "name": "last_audit_review",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Date this object was last deep-audited. NULL means not yet audited. Use WHERE last_audit_review IS NULL to find unaudited objects."
      }
    ]
  },
  "meta.v_dependency_chain": {
    "schema": "meta",
    "name": "v_dependency_chain",
    "columns": [
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dependency_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "target_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "meta.v_registry_overview": {
    "schema": "meta",
    "name": "v_registry_overview",
    "columns": [
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "purpose",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "row_count_approx",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "refresh_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "needs_cleanup",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cleanup_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "depends_on_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "depended_by_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_issues",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "meta.v_unregistered_objects": {
    "schema": "meta",
    "name": "v_unregistered_objects",
    "columns": [
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "schema_name",
        "type": "name",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "object_name",
        "type": "name",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "note",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.bland_operator_lookup": {
    "schema": "public",
    "name": "bland_operator_lookup",
    "columns": [
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_maintenance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "static_based_monthly_fee",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_on_maintenance",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.bland_spanish_escalations": {
    "schema": "public",
    "name": "bland_spanish_escalations",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('bland_spanish_escalations_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "location",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "issue_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "issue_summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "language",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'es'::text",
        "comment": null
      },
      {
        "name": "call_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'new'::text",
        "comment": null
      },
      {
        "name": "resolved_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolved_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_notes",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.bland_transfers": {
    "schema": "public",
    "name": "bland_transfers",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "bland_call_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "caller_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transfer_node",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "display_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "location_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_on_maintenance",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_expiration_date",
        "type": "date",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "maintenance_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_version",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_make",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "scanner_model",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "claimed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "claimed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "transferred_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.certifix_locations": {
    "schema": "public",
    "name": "certifix_locations",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "url",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "street",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "zip",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cost",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "public.contact_name_lookup": {
    "schema": "public",
    "name": "contact_name_lookup",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "name_key",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "last_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "first_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.dashboard_summary": {
    "schema": "public",
    "name": "dashboard_summary",
    "columns": [
      {
        "name": "total_companies",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_contacts",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_deals",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_companies",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "mapped_companies",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dedup_proposals",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "association_repairs",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_contacts",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.data_change_log": {
    "schema": "public",
    "name": "data_change_log",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": "Auto-generated primary key"
      },
      {
        "name": "table_schema",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'public'::text",
        "comment": "Schema of the affected table. For DDL events, set to 'ddl_event' as a convention."
      },
      {
        "name": "table_name",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "Name of the affected table. For DDL events, contains the command tag (e.g., ALTER TABLE, CREATE INDEX)."
      },
      {
        "name": "operation",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": "DML operation (INSERT, UPDATE, DELETE) or DDL. Check constraint enforced."
      },
      {
        "name": "row_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Primary key of the affected row (for row-level triggers). 'aggregate' for batch triggers. NULL for DDL."
      },
      {
        "name": "old_data",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB snapshot of row before change (UPDATE/DELETE). NULL for INSERT and DDL."
      },
      {
        "name": "new_data",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "JSONB snapshot of row after change (INSERT/UPDATE) or DDL event metadata."
      },
      {
        "name": "changed_fields",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Array of column names that changed (UPDATE only, row-level triggers). NULL for aggregate triggers and DDL."
      },
      {
        "name": "changed_by",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "CURRENT_USER",
        "comment": "Database user who made the change. Defaults to CURRENT_USER."
      },
      {
        "name": "changed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": false,
        "default": "now()",
        "comment": "Timestamp of the change. Indexed as part of composite (table_schema, table_name, changed_at DESC)."
      },
      {
        "name": "session_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": "Optional session identifier. Must be set via SET LOCAL before DML for grouping. Currently unpopulated by triggers."
      }
    ]
  },
  "public.dialpad_transcript_extractions": {
    "schema": "public",
    "name": "dialpad_transcript_extractions",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('dialpad_transcript_extractions_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "call_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_org_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extraction_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "best_match_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "best_match_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "best_match_similarity",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "best_match_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "current_matched_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "current_match_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "validation_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "public.phone_client_lookup": {
    "schema": "public",
    "name": "phone_client_lookup",
    "columns": [
      {
        "name": "e164_phone",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "source_detail",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0.90",
        "comment": null
      }
    ]
  },
  "public.v_association_repairs": {
    "schema": "public",
    "name": "v_association_repairs",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "from_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "from_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "repair_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_ccr_flagged_items": {
    "schema": "public",
    "name": "v_ccr_flagged_items",
    "columns": [
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "needs_review",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "review_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "review_priority",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_company_class_dist": {
    "schema": "public",
    "name": "v_company_class_dist",
    "columns": [
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_company_classifications": {
    "schema": "public",
    "name": "v_company_classifications",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_tickets",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_deals_won",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_government",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_contact_class_dist": {
    "schema": "public",
    "name": "v_contact_class_dist",
    "columns": [
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_contact_classifications": {
    "schema": "public",
    "name": "v_contact_classifications",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_field",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_email",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_phone",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_name",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_company_association",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "associated_company_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "associated_ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_customer_mappings": {
    "schema": "public",
    "name": "v_customer_mappings",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "supabase_customer_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "supabase_customer_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_data_changes_dml": {
    "schema": "public",
    "name": "v_data_changes_dml",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "table_schema",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "table_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "operation",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "row_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "old_data",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "new_data",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "changed_fields",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "changed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "changed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "session_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_dedup_proposals": {
    "schema": "public",
    "name": "v_dedup_proposals",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_dedup_status_dist": {
    "schema": "public",
    "name": "v_dedup_status_dist",
    "columns": [
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_mapping_status_dist": {
    "schema": "public",
    "name": "v_mapping_status_dist",
    "columns": [
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_repair_status_dist": {
    "schema": "public",
    "name": "v_repair_status_dist",
    "columns": [
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_ticket_activity": {
    "schema": "public",
    "name": "v_ticket_activity",
    "columns": [
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "open_tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "closed_tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "oldest_open_ticket",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_last_30d",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_last_90d",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "top_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_ticket_monthly_trends": {
    "schema": "public",
    "name": "v_ticket_monthly_trends",
    "columns": [
      {
        "name": "year_month",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_created",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_closed",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "unique_clients",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "top_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_writeback_action_dist": {
    "schema": "public",
    "name": "v_writeback_action_dist",
    "columns": [
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_writeback_dashboard": {
    "schema": "public",
    "name": "v_writeback_dashboard",
    "columns": [
      {
        "name": "total_hs_companies",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccr_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccr_clean",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccr_flagged",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "distinct_clients",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ready_to_write",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "on_hold",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "skipped",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "high_confidence_ready",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lower_confidence_ready",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dedup_approved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "dedup_pending",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "repairs_approved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "repairs_pending",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contacts_classified",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_dedup_pending",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_writeback_preview": {
    "schema": "public",
    "name": "v_writeback_preview",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_government",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_tickets",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_deals_won",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_emails",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_activity",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_customer_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "mapping_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "writeback_action",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "data_quality_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "public.v_writeback_ready": {
    "schema": "public",
    "name": "v_writeback_ready",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_government",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_blsid",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_has_client_id",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_tickets",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "has_deals_won",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_deal_value",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_client_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_client",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_active_client",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_blsid_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccr_needs_review",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ccr_review_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "mapping_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "h2s_match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "h2s_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "writeback_action",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "data_quality_score",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "overall_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.client_map": {
    "schema": "sandbox",
    "name": "client_map",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('sandbox.client_map_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_id_label",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_company",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_owner",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone_number",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "street_address",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "street_address_2",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "country",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "postal_code",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_owner",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "accounting_bucket",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_parent",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "loaded_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "sandbox.company_client_link": {
    "schema": "sandbox",
    "name": "company_client_link",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('sandbox.company_client_link_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_map_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "match_evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'auto_approved'::text",
        "comment": null
      },
      {
        "name": "matched_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "last_verified_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "reviewed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_associations": {
    "schema": "sandbox",
    "name": "hubspot_associations",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('sandbox.hubspot_associations_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "from_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "from_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "association_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_companies": {
    "schema": "sandbox",
    "name": "hubspot_companies",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "country",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lifecycle_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_company_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "num_associated_contacts",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "raw_properties",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_contacts": {
    "schema": "sandbox",
    "name": "hubspot_contacts",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lifecycle_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "raw_properties",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_deals": {
    "schema": "sandbox",
    "name": "hubspot_deals",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "close_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "owner_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "raw_properties",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_extraction_log": {
    "schema": "sandbox",
    "name": "hubspot_extraction_log",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('sandbox.hubspot_extraction_log_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "batch_number",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "records_extracted",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "total_so_far",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'in_progress'::text",
        "comment": null
      },
      {
        "name": "error_message",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "started_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "completed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.hubspot_tickets": {
    "schema": "sandbox",
    "name": "hubspot_tickets",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "subject",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "content",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "owner_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "raw_properties",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "is_noise",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "noise_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_applicant",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "is_orphan",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "is_vendor_noise",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "vendor_noise_company",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.resolved_associations": {
    "schema": "sandbox",
    "name": "resolved_associations",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('sandbox.resolved_associations_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "resolved_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "is_primary",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_client_summary": {
    "schema": "sandbox",
    "name": "v_client_summary",
    "columns": [
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_companies",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "closed_tickets",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "first_ticket",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_ticket",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deals",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "won_deals",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "won_revenue",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "first_deal",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_won_close",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_company_directory": {
    "schema": "sandbox",
    "name": "v_company_directory",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "country",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "customer_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lifecycle_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_map_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolved_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "parent_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_map_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "link_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "link_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_linked",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_match_method_stats": {
    "schema": "sandbox",
    "name": "v_match_method_stats",
    "columns": [
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "cnt",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "avg_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_pipeline_scorecard": {
    "schema": "sandbox",
    "name": "v_pipeline_scorecard",
    "columns": [
      {
        "name": "companies_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "companies_linked",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "companies_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_noise",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_applicant",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_orphan",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_vendor_noise",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_operational",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_resolved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "tickets_resolved_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "won_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "won_resolved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "won_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lost_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lost_resolved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lost_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_total",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_resolved",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_pct",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "generated_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_resolved_deals": {
    "schema": "sandbox",
    "name": "v_resolved_deals",
    "columns": [
      {
        "name": "deal_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "close_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "owner_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_primary",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_resolved_tickets": {
    "schema": "sandbox",
    "name": "v_resolved_tickets",
    "columns": [
      {
        "name": "ticket_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "subject",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "owner_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "source",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_unresolved_tickets": {
    "schema": "sandbox",
    "name": "v_unresolved_tickets",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "subject",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "pipeline_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lifecycle_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "sandbox.v_unresolved_won_deals": {
    "schema": "sandbox",
    "name": "v_unresolved_won_deals",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "deal_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "amount",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "close_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "owner_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "hs_blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  },
  "validated.association_repairs": {
    "schema": "validated",
    "name": "association_repairs",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('validated.association_repairs_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "from_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "from_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_type",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "to_object_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "repair_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.canonical_client_registry": {
    "schema": "validated",
    "name": "canonical_client_registry",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('validated.canonical_client_registry_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_client_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_source",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_active_client",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "parent_client",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "needs_review",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "review_reason",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "review_priority",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'low'::text",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.company_classification": {
    "schema": "validated",
    "name": "company_classification",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsid",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "billing_email_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "state",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "city",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "has_blsid",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_client_id",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_tickets",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_deals_won",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_deals_open",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_deals_lost",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "deal_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "total_deal_value",
        "type": "numeric",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "contact_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "contact_emails",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "contact_email_domains",
        "type": "_text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_activity",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "segment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_government",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      }
    ]
  },
  "validated.company_dedup_proposals": {
    "schema": "validated",
    "name": "company_dedup_proposals",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('validated.company_dedup_proposals_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "canonical_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "reviewed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reviewed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.contact_classification": {
    "schema": "validated",
    "name": "contact_classification",
    "columns": [
      {
        "name": "hubspot_id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "first_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "full_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "email_domain",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "normalized_phone",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "company_field",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "lifecycle_stage",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classification",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "classification_reason",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "has_email",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_phone",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_name",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "has_company_association",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "associated_company_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "associated_ticket_count",
        "type": "int4",
        "is_pk": false,
        "nullable": true,
        "default": "0",
        "comment": null
      },
      {
        "name": "create_date",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "last_modified",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "classified_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.contact_dedup_proposals": {
    "schema": "validated",
    "name": "contact_dedup_proposals",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('validated.contact_dedup_proposals_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "canonical_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "canonical_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "duplicate_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "reviewed_by",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "reviewed_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.hubspot_to_supabase_map": {
    "schema": "validated",
    "name": "hubspot_to_supabase_map",
    "columns": [
      {
        "name": "id",
        "type": "int8",
        "is_pk": true,
        "nullable": false,
        "default": "nextval('validated.hubspot_to_supabase_map_id_seq'::regclass)",
        "comment": null
      },
      {
        "name": "hubspot_company_id",
        "type": "int8",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "hubspot_company_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "supabase_customer_id",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "supabase_customer_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "match_method",
        "type": "text",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "confidence",
        "type": "numeric",
        "is_pk": false,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "match_evidence",
        "type": "jsonb",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": "'pending'::text",
        "comment": null
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      }
    ]
  },
  "validated.ticket_knowledge": {
    "schema": "validated",
    "name": "ticket_knowledge",
    "columns": [
      {
        "name": "ticket_hubspot_id",
        "type": "text",
        "is_pk": true,
        "nullable": false,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_topic",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "ticket_category",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "is_noise",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "is_applicant_ticket",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "contact_type",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "external_person_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "external_person_email",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "external_person_org",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "b4all_agent_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "blsids_mentioned",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "client_id_mentioned",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "issue_summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_summary",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "resolution_status",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "template_detected",
        "type": "bool",
        "is_pk": false,
        "nullable": true,
        "default": "false",
        "comment": null
      },
      {
        "name": "template_name",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "template_text",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "key_info",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "language",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "sentiment",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "urgency",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      },
      {
        "name": "extracted_at",
        "type": "timestamptz",
        "is_pk": false,
        "nullable": true,
        "default": "now()",
        "comment": null
      },
      {
        "name": "extraction_error",
        "type": "text",
        "is_pk": false,
        "nullable": true,
        "default": null,
        "comment": null
      }
    ]
  }
};

export const FOREIGN_KEYS = [
  {
    "from": "call_data.bland_backtest_results.backtest_run_id",
    "to": "call_data.bland_backtest_runs.run_id"
  },
  {
    "from": "call_data.bland_transfers.bland_call_id",
    "to": "call_data.calls_raw_bland.call_id"
  },
  {
    "from": "call_data.calls.queue_id",
    "to": "call_data.queues.id"
  },
  {
    "from": "call_data.calls.agent_id",
    "to": "call_data.agents.id"
  },
  {
    "from": "call_data.transcripts.call_id",
    "to": "call_data.calls.id"
  },
  {
    "from": "kb.kb_proposed_updates.target_article_id",
    "to": "kb.kb_articles.id"
  },
  {
    "from": "kb.kb_sync_log.article_id",
    "to": "kb.kb_articles.id"
  }
];

export const LOGICAL_CONNECTIONS = [
  {
    "from": "sandbox.hubspot_associations.from_object_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "company assoc"
  },
  {
    "from": "sandbox.company_client_link.hubspot_company_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "company link"
  },
  {
    "from": "sandbox.resolved_associations.hubspot_company_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "resolved co"
  },
  {
    "from": "validated.company_classification.hubspot_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "classification"
  },
  {
    "from": "validated.canonical_client_registry.hubspot_company_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "CCR"
  },
  {
    "from": "validated.hubspot_to_supabase_map.hubspot_company_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "h2s map"
  },
  {
    "from": "validated.contact_classification.hubspot_id",
    "to": "sandbox.hubspot_contacts.hubspot_id",
    "label": "contact class"
  },
  {
    "from": "canonical.customer_transactions.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "client_id join"
  },
  {
    "from": "canonical.ar_ledger.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "client_id join"
  },
  {
    "from": "canonical.stg_sk_auto_billing.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "client_id join"
  },
  {
    "from": "canonical.stg_customer_mapping.resolved_client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "QBO\u2192TC map"
  },
  {
    "from": "public.phone_client_lookup.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "phone\u2192client"
  },
  {
    "from": "public.contact_name_lookup.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "name\u2192client"
  },
  {
    "from": "call_data.calls.matched_client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "call\u2192client"
  },
  {
    "from": "validated.company_dedup_proposals.canonical_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "dedup canonical"
  },
  {
    "from": "validated.company_dedup_proposals.duplicate_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "dedup duplicate"
  },
  {
    "from": "validated.association_repairs.to_object_id",
    "to": "sandbox.hubspot_companies.hubspot_id",
    "label": "repair target"
  },
  {
    "from": "sandbox.resolved_associations.object_id",
    "to": "sandbox.hubspot_tickets.hubspot_id",
    "label": "ticket assoc"
  },
  {
    "from": "canonical.stg_sk_contract_transactions.contract_code",
    "to": "canonical.stg_contract_pricing.contract_code",
    "label": "contract code"
  },
  {
    "from": "canonical.stg_qb_journal_entry_lines.transaction_number",
    "to": "canonical.stg_qb_journal_entries.transaction_number",
    "label": "JE number"
  },
  {
    "from": "canonical.je_tier_classification.je_number",
    "to": "canonical.stg_qb_journal_entries.transaction_number",
    "label": "JE tier"
  },
  {
    "from": "canonical.stg_sk_peer_service_fees.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "PSF client"
  },
  {
    "from": "canonical.stg_sk_invoice_summary.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "invoice client"
  },
  {
    "from": "canonical.stg_pramod_maintenance.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "maint client"
  },
  {
    "from": "canonical.stg_deferred_revenue_coverage.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "DRC client"
  },
  {
    "from": "public.dialpad_transcript_extractions.best_match_client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "extraction\u2192client"
  },
  {
    "from": "call_data.calls_raw_dialpad.matched_client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "dialpad\u2192client"
  },
  {
    "from": "call_data.bland_transfers.client_id",
    "to": "canonical.thinclient_blsid_detail.client_id",
    "label": "transfer\u2192client"
  },
  {
    "from": "call_data.bland_transfers.blsid",
    "to": "canonical.thinclient_blsid_detail.blsid",
    "label": "transfer\u2192blsid"
  },
  {
    "from": "meta.dependency_map.source_object",
    "to": "meta.object_registry.object_name",
    "label": "dep source"
  },
  {
    "from": "meta.column_dictionary.table_name",
    "to": "meta.object_registry.object_name",
    "label": "dict\u2192registry"
  }
];

export const TABLE_COMMENTS = {
  "call_data.agents": "Normalized lookup of all agents/systems handling calls. Human agents (Dialpad, GoTo) + Bland AI.",
  "call_data.bland_backtest_results": "Individual call evaluations from Bland backtesting. Verdict, failure category, suggested fixes.",
  "call_data.bland_backtest_runs": "Bland AI pathway backtest run metadata. Aggregate results per batch.",
  "call_data.bland_prompt_suggestions": "AI-generated suggestions for improving Bland pathway prompt. Deduped by category/node.",
  "call_data.bland_prompt_versions": "Bland AI pathway prompt version history. Active prompt used by bland-call-analyzer.",
  "call_data.bland_transfers": "Bland AI call transfers to human support. Enriched with BLSID/client/location from ThinClient.",
  "call_data.calls": "Unified call records: Bland (~278), Dialpad (~5,166), GoTo (~27,143). GoTo decommissioned 2026-02-06.",
  "call_data.calls_raw_bland": "Tier 2 raw vault: Full Bland API payloads. Use call_data.calls for analytics.",
  "call_data.calls_raw_dialpad": "Tier 2 raw vault: Full Dialpad API payloads. Use call_data.calls for analytics.",
  "call_data.queues": "Call queues. GoTo only: B4ALL Support, Sales, Operator, 24/7 Support.",
  "call_data.sync_metadata": "Sync state per telephony source. Cursor for incremental API pulls.",
  "call_data.temp_operator_lookup": "TEMPORARY: Operator phone directory from Bland AI. Needs reconciliation with CCR.",
  "call_data.transcripts": "Call transcript utterances for AI retrieval. Bland (structured) + Dialpad (full-text).",
  "call_data.v_agent_performance": "VIEW: Human agent performance across Dialpad and GoTo. Excludes Bland AI.",
  "call_data.v_ai_attendant": "VIEW: Bland AI auto-attendant performance. AI-specific fields: transfer, cost, analysis.",
  "call_data.v_call_volume": "VIEW: All calls across all sources. Safe for volume/trend analysis.",
  "call_data.v_client_call_activity": "VIEW: Client-centric call activity. Only matched calls. Per-client history.",
  "call_data.v_dialpad_enriched": "VIEW: Dialpad calls enriched with Tier 2 data. CSAT, MOS, recordings, gaps.",
  "call_data.v_queue_performance": "VIEW: GoTo queue performance. Historical only (decommissioned 2026-02-06).",
  "canonical.accounting_audit_log": "AUDIT: Deployment change tracking.",
  "canonical.ar_ledger": "ThinClient AR/AP ledger. 22 detail types. ~990K rows.",
  "canonical.coa_master": "Chart of accounts + automation status flags per account.",
  "canonical.customer_transactions": "ThinClient monthly transactions. Client_id, segment, volume, charges.",
  "canonical.je_tier_classification": "JE tier assignments. Tier 1=Proven through 8=One-time. Close step mapping.",
  "canonical.stg_achworks_transactions": "ACHWorks ACH transaction records.",
  "canonical.stg_asc842_lease_schedule": "ASC 842 lease amortization from LeaseCrunch.",
  "canonical.stg_contract_pricing": "Fee schedules per contract. AJE workbook. Single-month snapshot.",
  "canonical.stg_customer_mapping": "QBO\u2194ThinClient customer name mapping. 93.8% resolved.",
  "canonical.stg_deferred_financing_schedule": "Deferred financing amortization schedule.",
  "canonical.stg_deferred_revenue_coverage": "Diana workbook. Historical only. REPLACED by stg_pramod_maintenance.",
  "canonical.stg_ea_reclass_monthly": "Monthly EA reclassification entries.",
  "canonical.stg_fixed_asset_register": "FA depreciation schedule. QBO FA module NOT used.",
  "canonical.stg_ml_monthly_market_value": "Merrill Lynch 3529 statement data. Market value + unrealized G/L.",
  "canonical.stg_paypal_transactions": "PayPal transaction records.",
  "canonical.stg_pramod_maintenance": "Go-forward deferred rev. Static snapshots from ThinClient/Pramod.",
  "canonical.stg_psp_balance_totals": "PSP AR/AP balance totals by report date.",
  "canonical.stg_qb_account_list": "QBO account balances. Point-in-time snapshot.",
  "canonical.stg_qb_customer_contacts": "QBO customer contact info.",
  "canonical.stg_qb_deposit_detail": "QBO bank deposit detail.",
  "canonical.stg_qb_expense_report": "QBO expenses by vendor.",
  "canonical.stg_qb_invoice_list": "QBO open invoices with open_balance.",
  "canonical.stg_qb_invoices_received_payments": "QBO payments, credit memos, JEs applied to invoices.",
  "canonical.stg_qb_journal_entries": "QBO JE headers. BACKTEST ONLY.",
  "canonical.stg_qb_journal_entry_lines": "QBO JE line detail. BACKTEST + Tier 5 reversals.",
  "canonical.stg_qb_pnl": "QBO P&L after JEs posted. Reconciliation only.",
  "canonical.stg_qb_sales": "QBO ALL transaction types: Invoice, Payment, Credit Memo, etc. 209K rows.",
  "canonical.stg_qb_unpaid_bills": "QBO open bills. Penny-perfect match to AP balance.",
  "canonical.stg_qb_vendor_contacts": "QBO vendor contacts.",
  "canonical.stg_ramp_business_transactions": "Ramp business account transactions.",
  "canonical.stg_ramp_cc_transactions": "Ramp credit card transactions.",
  "canonical.stg_recurring_je_lines": "Recurring JE templates with date ranges + step mapping.",
  "canonical.stg_sk_auto_billing": "ThinClient 119 cumulative billing. AMOUNTS IN PENNIES.",
  "canonical.stg_sk_contract_transactions": "ThinClient 119. FP+PR unit economics per contract/agency/fee.",
  "canonical.stg_sk_invoice_summary": "ThinClient 119. Total/discount/invoiced/paid per client invoice.",
  "canonical.stg_sk_not_processed": "ThinClient 119. PaymentID Not Processed \u2014 COGS gap source.",
  "canonical.stg_sk_outstanding_invoices": "ThinClient 119. Unpaid invoice snapshots. Oct-Dec 2024 = garbage.",
  "canonical.stg_sk_peer_service_fees": "ThinClient 119. PSP fee tiers per client per invoice.",
  "canonical.stg_swipesum_monthly_fees": "Monthly SwipeSum merchant processing fee totals.",
  "canonical.stg_swipesum_transactions": "SwipeSum credit card transaction records.",
  "canonical.thinclient_blsid_detail": "Master BLSID reference. 154 columns. Location, scanner, maintenance, billing.",
  "finance.cache_je_comparison": "Cached JE comparison results.",
  "finance.cache_je_detail": "Cached JE detail for dashboard.",
  "finance.cache_je_summary": "Cached JE summary for dashboard.",
  "finance.cache_pr_report": "Cached PR report data.",
  "finance.v_ar_aging_analysis": "VIEW: AR aging analysis by client.",
  "finance.v_ar_ap_reconciliation": "VIEW: AR/AP reconciliation between ThinClient and QBO.",
  "finance.v_ar_trueup": "VIEW: AR true-up calculations.",
  "finance.v_client_ar_waterfall": "VIEW: Client AR waterfall analysis.",
  "finance.v_client_coverage_months": "VIEW: Client maintenance coverage months.",
  "finance.v_close_progress": "VIEW: Month-end close progress tracker.",
  "finance.v_deferred_revenue_balance": "VIEW: Deferred revenue balance calculations.",
  "finance.v_deferred_revenue_billing": "VIEW: Deferred revenue billing detail.",
  "finance.v_deferred_revenue_schedule": "VIEW: Deferred revenue amortization schedule.",
  "finance.v_je_lines_mapped": "VIEW: JE lines mapped to COA master.",
  "finance.v_qb_solutions_proof": "VIEW: QBO Solutions revenue proof.",
  "finance.v_qb_support_fees_proof": "VIEW: QBO Support fees proof.",
  "finance.v_sales_pnl_rollup": "VIEW: Sales P&L rollup by segment.",
  "finance.v_sk_cogs_classification": "VIEW: SK COGS classification per transaction.",
  "finance.v_sk_fee_classification": "VIEW: SK fee classification per transaction.",
  "finance.v_sk_not_processed_monthly": "VIEW: Monthly not-processed transaction summary.",
  "finance.v_sk_revenue_cogs_monthly": "VIEW: Monthly revenue + COGS by segment.",
  "finance.v_tc_monthly_balances": "VIEW: ThinClient monthly AR/AP balances.",
  "kb.kb_articles": "Vector-ready KB. One row per article/chunk. GitHub mirror for AI queries.",
  "kb.kb_proposed_updates": "Staging for KB feedback loop. Pipelines propose; humans approve.",
  "kb.kb_remediation": "KB remediation tracking.",
  "kb.kb_sync_log": "Audit trail for kb_articles changes.",
  "kb.v_kb_health": "VIEW: KB health metrics.",
  "kb.v_kb_overview": "VIEW: KB overview with article counts.",
  "kb.v_kb_pending_updates": "VIEW: Pending KB update proposals.",
  "kb.v_kb_sync_history": "VIEW: KB sync history.",
  "meta.agent_log": "DEPRECATED. Use accounting_audit_log instead.",
  "meta.column_dictionary": "Business definitions for key columns. Join keys and commonly misunderstood fields.",
  "meta.dependency_map": "Object dependency tracking. Data lineage: views\u2192tables, functions\u2192tables.",
  "meta.issues": "Known DB issues from audits. Severity, category, resolution status.",
  "meta.object_registry": "Master catalog of every table, view, function, edge function. 149 objects.",
  "meta.v_dependency_chain": "VIEW: Expanded dependency chain. Source\u2192target with types.",
  "meta.v_registry_overview": "VIEW: Registry overview with counts by domain, type, status.",
  "meta.v_unregistered_objects": "VIEW: Gap analysis \u2014 objects not yet in registry.",
  "public.certifix_locations": "Certifix competitor location directory. 1,204 locations scraped.",
  "public.phone_client_lookup": "E.164 phone\u2192client_id mapping. Confidence-scored. 20K records.",
  "public.dialpad_transcript_extractions": "NLP-extracted entities from Dialpad transcripts. Fuzzy matching results.",
  "public.contact_name_lookup": "Name\u2192client_id lookup for fuzzy matching in call attribution.",
  "public.data_change_log": "Automated audit trail. Row-level DML + DDL changes.",
  "public.bland_spanish_escalations": "Spanish-language caller escalations from Bland AI.",
  "sandbox.hubspot_companies": "HubSpot company records. 23K. BLSID, client_id, lifecycle.",
  "sandbox.hubspot_contacts": "HubSpot contact records. 41K. Name, email, phone.",
  "sandbox.hubspot_deals": "HubSpot deal records. 1.6K. Pipeline, stage, amount.",
  "sandbox.hubspot_tickets": "HubSpot ticket records. 55K. Subject, topic, noise flags.",
  "sandbox.hubspot_associations": "Raw HubSpot associations. 139K. company\u2192contact/deal/ticket.",
  "sandbox.hubspot_extraction_log": "HubSpot extraction run log.",
  "sandbox.client_map": "HubSpot\u2192B4ALL client_id mapping. 8K records.",
  "sandbox.company_client_link": "HubSpot company\u2192client_id confirmed links with confidence.",
  "sandbox.resolved_associations": "HubSpot associations\u2192B4ALL client_ids. 29K resolved.",
  "validated.company_classification": "Classified HubSpot companies. 23K. real_customer, junk, vendor.",
  "validated.contact_classification": "Classified HubSpot contacts. 41K.",
  "validated.canonical_client_registry": "Golden record: HubSpot\u2192canonical client_id. 13K.",
  "validated.hubspot_to_supabase_map": "HubSpot\u2192Supabase customer mapping. 10K.",
  "validated.company_dedup_proposals": "Duplicate company merge proposals. 5.3K.",
  "validated.association_repairs": "HubSpot association repair proposals. 3.9K.",
  "validated.contact_dedup_proposals": "Contact dedup proposals. 483.",
  "validated.ticket_knowledge": "AI-extracted ticket knowledge. Topics, resolutions, templates."
};

export const TABLE_TYPES = {
  "call_data.agents": "table",
  "call_data.bland_backtest_results": "table",
  "call_data.bland_backtest_runs": "table",
  "call_data.bland_prompt_suggestions": "table",
  "call_data.bland_prompt_versions": "table",
  "call_data.bland_transfers": "table",
  "call_data.calls": "table",
  "call_data.calls_raw_bland": "table",
  "call_data.calls_raw_dialpad": "table",
  "call_data.queues": "table",
  "call_data.sync_metadata": "table",
  "call_data.temp_operator_lookup": "view",
  "call_data.transcripts": "table",
  "call_data.v_agent_performance": "view",
  "call_data.v_ai_attendant": "view",
  "call_data.v_call_volume": "view",
  "call_data.v_client_call_activity": "view",
  "call_data.v_dialpad_enriched": "view",
  "call_data.v_queue_performance": "view",
  "canonical.accounting_audit_log": "table",
  "canonical.ar_ledger": "table",
  "canonical.coa_master": "table",
  "canonical.customer_transactions": "table",
  "canonical.je_tier_classification": "table",
  "canonical.stg_achworks_transactions": "table",
  "canonical.stg_asc842_lease_schedule": "table",
  "canonical.stg_contract_pricing": "table",
  "canonical.stg_customer_mapping": "table",
  "canonical.stg_deferred_financing_schedule": "table",
  "canonical.stg_deferred_revenue_coverage": "table",
  "canonical.stg_ea_reclass_monthly": "table",
  "canonical.stg_fixed_asset_register": "table",
  "canonical.stg_ml_monthly_market_value": "table",
  "canonical.stg_paypal_transactions": "table",
  "canonical.stg_pramod_maintenance": "table",
  "canonical.stg_psp_balance_totals": "table",
  "canonical.stg_qb_account_list": "table",
  "canonical.stg_qb_customer_contacts": "table",
  "canonical.stg_qb_deposit_detail": "table",
  "canonical.stg_qb_expense_report": "table",
  "canonical.stg_qb_invoice_list": "table",
  "canonical.stg_qb_invoices_received_payments": "table",
  "canonical.stg_qb_journal_entries": "table",
  "canonical.stg_qb_journal_entry_lines": "table",
  "canonical.stg_qb_pnl": "table",
  "canonical.stg_qb_sales": "table",
  "canonical.stg_qb_unpaid_bills": "table",
  "canonical.stg_qb_vendor_contacts": "table",
  "canonical.stg_ramp_business_transactions": "table",
  "canonical.stg_ramp_cc_transactions": "table",
  "canonical.stg_recurring_je_lines": "table",
  "canonical.stg_sk_auto_billing": "table",
  "canonical.stg_sk_contract_transactions": "table",
  "canonical.stg_sk_invoice_summary": "table",
  "canonical.stg_sk_not_processed": "table",
  "canonical.stg_sk_outstanding_invoices": "table",
  "canonical.stg_sk_peer_service_fees": "table",
  "canonical.stg_swipesum_monthly_fees": "table",
  "canonical.stg_swipesum_transactions": "table",
  "canonical.thinclient_blsid_detail": "table",
  "finance.cache_je_comparison": "table",
  "finance.cache_je_detail": "table",
  "finance.cache_je_summary": "table",
  "finance.cache_pr_report": "table",
  "finance.v_ar_aging_analysis": "view",
  "finance.v_ar_ap_reconciliation": "view",
  "finance.v_ar_trueup": "view",
  "finance.v_client_ar_waterfall": "view",
  "finance.v_client_coverage_months": "view",
  "finance.v_close_progress": "view",
  "finance.v_deferred_revenue_balance": "view",
  "finance.v_deferred_revenue_billing": "view",
  "finance.v_deferred_revenue_schedule": "view",
  "finance.v_je_lines_mapped": "view",
  "finance.v_qb_solutions_proof": "view",
  "finance.v_qb_support_fees_proof": "view",
  "finance.v_sales_pnl_rollup": "view",
  "finance.v_sk_cogs_classification": "view",
  "finance.v_sk_fee_classification": "view",
  "finance.v_sk_not_processed_monthly": "view",
  "finance.v_sk_revenue_cogs_monthly": "view",
  "finance.v_tc_monthly_balances": "view",
  "kb.kb_articles": "table",
  "kb.kb_proposed_updates": "table",
  "kb.kb_remediation": "table",
  "kb.kb_sync_log": "table",
  "kb.v_kb_health": "view",
  "kb.v_kb_overview": "view",
  "kb.v_kb_pending_updates": "view",
  "kb.v_kb_sync_history": "view",
  "meta.agent_log": "table",
  "meta.column_dictionary": "table",
  "meta.dependency_map": "table",
  "meta.issues": "table",
  "meta.object_registry": "table",
  "meta.v_dependency_chain": "view",
  "meta.v_registry_overview": "view",
  "meta.v_unregistered_objects": "view",
  "public.bland_operator_lookup": "view",
  "public.bland_spanish_escalations": "table",
  "public.bland_transfers": "view",
  "public.certifix_locations": "table",
  "public.contact_name_lookup": "table",
  "public.dashboard_summary": "view",
  "public.data_change_log": "table",
  "public.dialpad_transcript_extractions": "table",
  "public.phone_client_lookup": "table",
  "public.v_association_repairs": "view",
  "public.v_ccr_flagged_items": "view",
  "public.v_company_class_dist": "view",
  "public.v_company_classifications": "view",
  "public.v_contact_class_dist": "view",
  "public.v_contact_classifications": "view",
  "public.v_customer_mappings": "view",
  "public.v_data_changes_dml": "view",
  "public.v_dedup_proposals": "view",
  "public.v_dedup_status_dist": "view",
  "public.v_mapping_status_dist": "view",
  "public.v_repair_status_dist": "view",
  "public.v_ticket_activity": "view",
  "public.v_ticket_monthly_trends": "view",
  "public.v_writeback_action_dist": "view",
  "public.v_writeback_dashboard": "view",
  "public.v_writeback_preview": "view",
  "public.v_writeback_ready": "view",
  "sandbox.client_map": "table",
  "sandbox.company_client_link": "table",
  "sandbox.hubspot_associations": "table",
  "sandbox.hubspot_companies": "table",
  "sandbox.hubspot_contacts": "table",
  "sandbox.hubspot_deals": "table",
  "sandbox.hubspot_extraction_log": "table",
  "sandbox.hubspot_tickets": "table",
  "sandbox.resolved_associations": "table",
  "sandbox.v_client_summary": "view",
  "sandbox.v_company_directory": "view",
  "sandbox.v_match_method_stats": "view",
  "sandbox.v_pipeline_scorecard": "view",
  "sandbox.v_resolved_deals": "view",
  "sandbox.v_resolved_tickets": "view",
  "sandbox.v_unresolved_tickets": "view",
  "sandbox.v_unresolved_won_deals": "view",
  "validated.association_repairs": "table",
  "validated.canonical_client_registry": "table",
  "validated.company_classification": "table",
  "validated.company_dedup_proposals": "table",
  "validated.contact_classification": "table",
  "validated.contact_dedup_proposals": "table",
  "validated.hubspot_to_supabase_map": "table",
  "validated.ticket_knowledge": "table"
};

export const SCHEMA_COLORS = {
  "public": "#6366f1",
  "sandbox": "#f59e0b", 
  "validated": "#10b981",
  "canonical": "#ef4444",
  "call_data": "#8b5cf6",
  "meta": "#06b6d4",
  "finance": "#ec4899",
  "kb": "#14b8a6"
};
